from connection import executar
import psutil as ps
import platform as plat
from time import sleep as s
import os

osv = plat.uname()

while True:
    print("Seu sistema operacional é: " + osv.system)
    ## os.system("clear")
    # -=-=-=-=-=-=-=-=-=-= CPU -=-=-=-=-=-=-=-=-=-=

    dict_cpu = {}
    list_cpu = []

    tempo_ocioso = ps.cpu_times().idle
    tempo_uso_kernel = ps.cpu_times().system

    qtd_cpus_virtuais = ps.cpu_count()
    qtd_cpus_fisicos = ps.cpu_count(logical=False)

    uso_cpus = ps.cpu_percent(interval=None, percpu=True)

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
Quantidade de CPUs Fisicos == {qtd_cpus_fisicos} - """
    )

    # % de Uso das CPUs == {dict_cpu}%
    for i in range(0, len(uso_cpus)):
        desc = "Porcentagem CPU " + str(i + 1)
        dict_cpu.clear()

        dict_cpu[f"Porcentagem CPU {(i + 1)}"] = uso_cpus[i]

        list_cpu.append(dict_cpu.copy())
        print(list_cpu[i])

        executar(
            f"insert into Registro values (null, '{desc}', now(), {uso_cpus[i]}, 2, 3, 5);"
        )

    print(
        f"""
Tempo de interrupções da CPU == {(interrupcoes_cpu/1000000):.2f} s
Frequência Atual da CPU == {(frequencia_cpu_atual/1000):.2f} GHz
Frequência Máxima da CPU == {(frequencia_cpu_max/1000):.2f} GHz - 
Frequência Mínima da CPU == {(frequencia_cpu_min/1000):.2f} GHz -
    """
    )

    executar(
        f"call RegistroCPU('{(tempo_uso_kernel/1000):.2f}', '{(tempo_uso_kernel/1000):.2f}', '{(interrupcoes_cpu/1000000):.2f}', '{(frequencia_cpu_atual/1000):.2f}')"
    )

    # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=

    memoria_usada = ps.virtual_memory().used
    memoria_total = ps.virtual_memory().total
    memoria_livre = ps.virtual_memory().free
    memoria_disponivel = ps.virtual_memory().available

    print(
        f"""
 ------------------ Memória --------------------- 
 Memória Total == {memoria_total/1000000000:.2f} Gb -
 Memória Usada == {memoria_usada/1000000000:.2f} Gb
 Memória Livre == {memoria_livre/1000000000:.2f} Gb
 Memória Disponível == {memoria_disponivel/1000000000:.2f} Gb
 """
    )

    dict_disk = {}
    list_disc = []
    executar(
        f"call RegistroMemoria('{memoria_usada/1000000000:.2f}',  '{memoria_livre/1000000000:.2f}', '{memoria_disponivel/1000000000:.2f}')"
    )

    # -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=
    print(f"""------------------ Disco ---------------------""")
    particoes_disco = ps.disk_partitions()
    for i in range(0, len(particoes_disco)):
        dict_disk.clear()

        particao = ps.disk_partitions()[i].device
        uso_total_disco = ps.disk_usage(f"{particao}").total
        disco_usado = ps.disk_usage(f"{particao}").used
        disco_livre = ps.disk_usage(f"{particao}").free
        porcent_disco = ps.disk_usage(f"{particao}").percent

        dict_disk["Particao"] = particao
        dict_disk["Total"] = f"{(uso_total_disco/1000000000):.2f} Gb"
        dict_disk["Usado"] = f"{(disco_usado/1000000000):.2f} Gb"
        dict_disk["Livre"] = f"{(disco_livre/1000000000):.2f} Gb"
        dict_disk["Porcentagem"] = f"{porcent_disco} %"

        list_disc.append(dict_disk.copy())
        print(dict_disk)
        executar(
            f"call RegistroDisco('{(uso_total_disco/1000000000):.2f}','{(disco_usado/1000000000):.2f}','{(disco_livre/1000000000):.2f}','{porcent_disco}')"
        )

    # -=-=-=-=-=-=-=-=-=-= Rede -=-=-=-=-=-=-=-=-=-=

    bytes_enviados = ps.net_io_counters().bytes_sent
    bytes_recebidos = ps.net_io_counters().bytes_recv

    qtd_erros_entrada = ps.net_io_counters().errin
    qtd_erros_saida = ps.net_io_counters().errout

    # velocidade_rede_cabo = ps.net_if_stats()[0].speed
    # cabo_conectado = ps.net_if_stats()[0].isup

    print(
        f"""
------------------ Rede --------------------- 
Bytes Enviados == {bytes_enviados/1000000:.2f} Mb
Bytes Recebidos == {bytes_recebidos/1000000:.2f} Mb
Quantidade de Erros na Entrada == {qtd_erros_entrada}
Quantidade de Erros na Saida == {qtd_erros_saida}
"""
    )

    executar(
        f"call RegistroRede('{bytes_enviados/1000000:.2f}','{bytes_recebidos/1000000:.2f}','{qtd_erros_entrada}','{qtd_erros_saida}')"
    )

    if osv.system == "Linux":
        lista = []
        # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

        for i in range(0, len(ps.sensors_temperatures()["nvme"])):
            temperatura_cpu_label = ps.sensors_temperatures()["nvme"][i].label
            temperatura_cpu_atual = ps.sensors_temperatures()["nvme"][i].current
            lista.append([temperatura_cpu_label + "°C", temperatura_cpu_atual + "°C"])

        print(
            f"""
            ------------------ Temperatura --------------------- 
            Temperaturas do Entorno da CPU == {lista}
            """
        )
        executar(
            f"call RegistroTemperatura('{temperatura_cpu_label}','{temperatura_cpu_atual}')"
        )

    s(10)
