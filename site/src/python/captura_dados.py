import datetime
import platform as plat
from time import sleep as s

import psutil as ps
from connection import executar
from message import mensagem_slack

list_media_cpu = []
list_media_memoria = []
list_media_disco = []
media_geral_cpu = 0 
nome_user = ps.users()[0][0]
id_server = executar(
    f"SELECT idServidor FROM servidor WHERE apelidoServidor = '{nome_user}';"
)
data_atual = datetime.datetime.now()
teste = executar(
    f"SELECT * FROM componente WHERE idServidor = {id_server[0][0]};"
)
print(id_server[0])
print(id_server[0][0])
print(teste)


# -=-=-=-=-=-=-=-=-=-= CPU -=-=-=-=-=-=-=-=-=-=


def exibir_dados_cpu():

    s(2)
    global media_geral_cpu
    global list_media_cpu

    dict_cpu = {}
    list_cpu = []
    tempo_ocioso = ps.cpu_times().idle
    tempo_uso_kernel = ps.cpu_times().system

    qtd_cpus_virtuais = ps.cpu_count()
    qtd_cpus_fisicos = ps.cpu_count(logical=False)

    uso_cpus = ps.cpu_percent(interval=None, percpu=True)
    uso_cpu_geral = ps.cpu_percent(interval=None, percpu=False)
    media_geral_cpu = media_geral_cpu + uso_cpu_geral

    interrupcoes_cpu = ps.cpu_stats().interrupts

    frequencia_cpu_atual = ps.cpu_freq().current
    frequencia_cpu_max = ps.cpu_freq().max
    frequencia_cpu_min = ps.cpu_freq().min

    print(
        f"""
    ------------------ CPU --------------------- 
    Tempo Ocioso == {(tempo_ocioso/1000):.2f} s
    Tempo de Uso do Kernel == {(tempo_uso_kernel/1000):.2f} s
    Quantidade de CPUs Virtuais == {qtd_cpus_virtuais} -
    Quantidade de CPUs Fisicos == {qtd_cpus_fisicos} - 
    Uso geral da CPU == {uso_cpu_geral}"""
    )


    frequencia_cpu_atual_tratado = (frequencia_cpu_atual/1000)
    frequencia_cpu_max_tratado = (frequencia_cpu_max/1000)
    frequencia_cpu_min_tratado = (frequencia_cpu_min/1000)
    lista_freq_cpu = [frequencia_cpu_atual_tratado,frequencia_cpu_max_tratado,frequencia_cpu_min_tratado]

    # % de Uso das CPUs == {dict_cpu}%
    for i in range(0, len(uso_cpus)):
        desc = "Porcentagem CPU " + str(i + 1)
        dict_cpu.clear()

        dict_cpu[f"Porcentagem CPU {(i + 1)}"] = uso_cpus[i]

        executar(
            f"Insert into registro values(null,{uso_cpus[i]}," + 
            f"'{data_atual}', {[4]}, {3})"
        )

        list_cpu.append(dict_cpu.copy())


    

    print(
        f"""
    Tempo de interrupções da CPU == {(interrupcoes_cpu/1000000):.2f} s
    Frequência Atual da CPU == {(frequencia_cpu_atual):.2f} GHz
    Frequência Máxima da CPU == {(frequencia_cpu_max_tratado):.2f} GHz - 
    Frequência Mínima da CPU == {frequencia_cpu_min_tratado:.2f} GHz -
    """
    )


    for i in range(0, len(lista_freq_cpu)):
        executar(
            f"Insert into registro values(null,{lista_freq_cpu[i]}," + 
            f"'{data_atual}', {id_server}, {4})"
        )

    if uso_cpus[0] > 95:
        print(mensagem_slack("O uso da CPU está acima de 70%"))

    return {
        "uso": uso_cpu_geral,
        "qtd_cpu": qtd_cpus_fisicos,
        "qtd_vcpu": qtd_cpus_virtuais,
    }


# -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=


def exibir_info_mem():
    memoria_usada = ps.virtual_memory().used
    memoria_total = ps.virtual_memory().total
    memoria_livre = ps.virtual_memory().free
    memoria_disponivel = ps.virtual_memory().available

    porcentagem_uso_memoria = round((memoria_usada * 100) / memoria_total, 2)
    list_media_memoria.append(porcentagem_uso_memoria)

    memoria_total

    print(
        f"""
    ------------------ Memória --------------------- 
    Memória Total == {memoria_total/1000000000:.2f} GB -
    Memória Usada == {memoria_usada/1000000000:.2f} GB
    Memória Livre == {memoria_livre/1000000000:.2f} GB
    Memória Disponível == {memoria_disponivel/1000000000:.2f} GB
    """
    )

    #executar(
    #    f"call RegistroMemoria({memoria_usada/1000000000:.2f}, {memoria_livre/1000000000:.2f}, {memoria_disponivel/1000000000:.2f}, {porcentagem_uso_memoria})"
    #)

    if memoria_usada / (10**9) > 7:
        print(
            mensagem_slack(
                f"""O uso de memória ram é excessivo!
                                Data e hora do alerta: {data_atual}"""
            )
        )

    return {
        "mem_total": f"{memoria_total/1000000000:.2f}GB",
        "mem_livre": f"{memoria_livre/1000000000:.2f} GB",
        "mem_usada": f"{memoria_usada/1000000000:.2f}GB",
        "pct_uso": f"{porcentagem_uso_memoria}%",
    }


# -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=


def exibir_info_disco():
    dict_disk = {}
    list_disc = []
    print(f"""------------------ Disco ---------------------""")
    particoes_disco = ps.disk_partitions()

    uso_total_disco = ps.disk_usage(f"/").total
    disco_usado = ps.disk_usage(f"/").used
    disco_livre = ps.disk_usage(f"/").free
    porcent_disco = ps.disk_usage(f"/").percent
    list_media_disco.append(porcent_disco)

    dict_disk["Particao"] = particoes_disco[0].device
    dict_disk["Total"] = f"{(uso_total_disco/1000000000):.2f} GB"
    dict_disk["Usado"] = f"{(disco_usado/1000000000):.2f} GB"
    dict_disk["Livre"] = f"{(disco_livre/1000000000):.2f} GB"
    dict_disk["Porcentagem"] = f"{porcent_disco} %"

    list_disc.append(dict_disk.copy())
    print(dict_disk)
   
    #executar(
    #    f"call RegistroDisco('{(uso_total_disco/1000000000):.2f}','{(disco_usado/1000000000):.2f}','{(disco_livre/1000000000):.2f}','{porcent_disco}')"
    #)

    return {
        "disc_total": f"{(uso_total_disco/1000000000):.2f} GB",
        "disc_usado": f"{(disco_usado/1000000000):.2f} GB",
        "disc_livre": f"{(disco_livre/1000000000):.2f} GB",
        "pct_uso": f"{porcent_disco}%",
    }


# -=-=-=-=-=-=-=-=-=-= Rede -=-=-=-=-=-=-=-=-=-=


def exibir_info_rede():
    bytes_enviados = ps.net_io_counters().bytes_sent
    bytes_recebidos = ps.net_io_counters().bytes_recv

    qtd_erros_entrada = ps.net_io_counters().errin
    qtd_erros_saida = ps.net_io_counters().errout

    # velocidade_rede_cabo = ps.net_if_stats()[0].speed
    # cabo_conectado = ps.net_if_stats()[0].isup

    print(
        f"""
    ------------------ Rede --------------------- 
    Bytes Enviados == {bytes_enviados/1000000:.2f} MB
    Bytes Recebidos == {bytes_recebidos/1000000:.2f} MB
    Quantidade de Erros na Entrada == {qtd_erros_entrada}
    Quantidade de Erros na Saida == {qtd_erros_saida}
    """
    )

    #executar(
    #    f"call RegistroRede('{bytes_enviados/1000000:.2f}','{bytes_recebidos/1000000:.2f}','{qtd_erros_entrada}','{qtd_erros_saida}')"
    #)

    return {
        "bytes_out": f"{bytes_enviados/1000000:.2f} MB/s",
        "bytes_in": f"{bytes_recebidos/1000000:.2f} MB/s",
        "qtd_erros_in": qtd_erros_entrada,
        "qtd_erros_saida": qtd_erros_saida,
    }


def exibir_info_temp(osv):
    if (osv) == "Linux":
        lista = []
        # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

        for i in range(0, len(ps.sensors_temperatures()["acpitz"])):
            temperatura_cpu_label = ps.sensors_temperatures()["acpitz"][i].label
            temperatura_cpu_atual = ps.sensors_temperatures()["acpitz"][i].current
            lista.append([f"{temperatura_cpu_label}°C", f"{temperatura_cpu_atual}°C"])

        print(
            f"""
            ------------------ Temperatura --------------------- 
            Temperaturas do Entorno da CPU == {lista}
            """
        )
        #executar(
        #    f"call RegistroTemperatura('{temperatura_cpu_label}','{temperatura_cpu_atual}')"
        #)

        return {"cpu": f"{temperatura_cpu_atual}°C"}
    else:
        return {"cpu": "Não é possível capturar no Windows"}
