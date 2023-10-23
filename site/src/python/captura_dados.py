import datetime
import platform as plat
from time import sleep
import psutil
from connection import executar
from message import mensagem_slack
from numexpr import cpuinfo

nome_user = psutil.users()[0][0] # Pega o nome do usuario da máquina e o utiliza para descobrir o idServidor.
data_atual = datetime.datetime.now()
id_server = executar(
    f"SELECT idServidor FROM servidor WHERE apelidoServidor = '{nome_user}';"
)
if id_server == []:
    print(f"Desculpe, o servidor {nome_user} ainda não foi cadastrado em nosso sistema, por favor acesse nosso site e cadastre este servidor.")
else:
    lista_componentes = executar(
        f"SELECT * FROM componente WHERE fkServidor = {id_server[0][0]}"
    )
    qtd_componentes = len(lista_componentes)

    qtd_cpu = 0
    qtd_ram = 0
    qtd_disco = 0
    qtd_rede = 0

    for componente_da_vez in lista_componentes:
        match componente_da_vez[3]:
            case "CPU":
                 qtd_cpu+=1
            case "RAM":
                qtd_ram+=1
            case "DISCO":
                qtd_disco+=1
            case "REDE":
                qtd_rede+=1
            case _:
                print(f"Componente {componente_da_vez[3]} não é reconhecido pelo nosso sistema.")
    print(qtd_cpu)
    print(qtd_disco)
    print(qtd_ram)
    print(qtd_rede)



    # # -=-=-=-=-=-=-=-=-=-= CPU -=-=-=-=-=-=-=-=-=-=

def exibir_dados_cpu():
        
    qtd_cpus_virtuais = psutil.cpu_count()
    qtd_cpus_fisicos = psutil.cpu_count(logical=False)
    uso_cpus = psutil.cpu_percent(interval=None, percpu=True)
    uso_cpu_geral = psutil.cpu_percent(interval=None, percpu=False)
    frequencia_cpu_atual = psutil.cpu_freq().current
    frequencia_cpu_max = psutil.cpu_freq().max
    frequencia_cpu_min = psutil.cpu_freq().min
    lista_freq_cpu = [frequencia_cpu_atual,frequencia_cpu_max,frequencia_cpu_min]

    print(
        f"""
    +---------------------- CPU -------------------------+
        Quantidade de CPUs Virtuais == {qtd_cpus_virtuais}         
        Quantidade de CPUs Fisicos == {qtd_cpus_fisicos}           
        Média de uso da CPU (%) == {uso_cpu_geral}                 
        Frequência Atual da CPU == {frequencia_cpu_atual} MHz      
        Frequência Máxima da CPU == {frequencia_cpu_max} MHz       
        Frequência Mínima da CPU == {frequencia_cpu_min} MHz       
    +----------------------     -------------------------+
    """)

# # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=


    # def exibir_info_mem():
    #     memoria_usada = psutil.virtual_memory().used
    #     memoria_total = psutil.virtual_memory().total
    #     memoria_livre = psutil.virtual_memory().free
    #     memoria_disponivel = psutil.virtual_memory().available

    #     porcentagem_uso_memoria = round((memoria_usada * 100) / memoria_total, 2)
    #     list_media_memoria.append(porcentagem_uso_memoria)

    #     memoria_total

    #     print(
    #         f"""
    #     ------------------ Memória --------------------- 
    #     Memória Total == {memoria_total/1000000000:.2f} GB -
    #     Memória Usada == {memoria_usada/1000000000:.2f} GB
    #     Memória Livre == {memoria_livre/1000000000:.2f} GB
    #     Memória Disponível == {memoria_disponivel/1000000000:.2f} GB
    #     """
    #     )

    #     #executar(
    #     #    f"call RegistroMemoria({memoria_usada/1000000000:.2f}, {memoria_livre/1000000000:.2f}, {memoria_disponivel/1000000000:.2f}, {porcentagem_uso_memoria})"
    #     #)

    #     if memoria_usada / (10**9) > 7:
    #         print(
    #             mensagem_slack(
    #                 f"""O uso de memória ram é excessivo!
    #                                 Data e hora do alerta: {data_atual}"""
    #             )
    #         )

    #     return {
    #         "mem_total": f"{memoria_total/1000000000:.2f}GB",
    #         "mem_livre": f"{memoria_livre/1000000000:.2f} GB",
    #         "mem_usada": f"{memoria_usada/1000000000:.2f}GB",
    #         "pct_uso": f"{porcentagem_uso_memoria}%",
    #     }


    # # -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=


    # def exibir_info_disco():
    #     dict_disk = {}
    #     list_disc = []
    #     print(f"""------------------ Disco ---------------------""")
    #     particoes_disco = psutil.disk_partitions()

    #     uso_total_disco = psutil.disk_usage(f"/").total
    #     disco_usado = psutil.disk_usage(f"/").used
    #     disco_livre = psutil.disk_usage(f"/").free
    #     porcent_disco = psutil.disk_usage(f"/").percent
    #     list_media_disco.append(porcent_disco)

    #     dict_disk["Particao"] = particoes_disco[0].device
    #     dict_disk["Total"] = f"{(uso_total_disco/1000000000):.2f} GB"
    #     dict_disk["Usado"] = f"{(disco_usado/1000000000):.2f} GB"
    #     dict_disk["Livre"] = f"{(disco_livre/1000000000):.2f} GB"
    #     dict_disk["Porcentagem"] = f"{porcent_disco} %"

    #     list_disc.append(dict_disk.copy())
    #     print(dict_disk)
    
    #     #executar(
    #     #    f"call RegistroDisco('{(uso_total_disco/1000000000):.2f}','{(disco_usado/1000000000):.2f}','{(disco_livre/1000000000):.2f}','{porcent_disco}')"
    #     #)

    #     return {
    #         "disc_total": f"{(uso_total_disco/1000000000):.2f} GB",
    #         "disc_usado": f"{(disco_usado/1000000000):.2f} GB",
    #         "disc_livre": f"{(disco_livre/1000000000):.2f} GB",
    #         "pct_uso": f"{porcent_disco}%",
    #     }


    # # -=-=-=-=-=-=-=-=-=-= Rede -=-=-=-=-=-=-=-=-=-=


    # def exibir_info_rede():
    #     bytes_enviados = psutil.net_io_counters().bytes_sent
    #     bytes_recebidos = psutil.net_io_counters().bytes_recv

    #     qtd_erros_entrada = psutil.net_io_counters().errin
    #     qtd_erros_saida = psutil.net_io_counters().errout

    #     # velocidade_rede_cabo = psutil.net_if_stats()[0].speed
    #     # cabo_conectado = psutil.net_if_stats()[0].isup

    #     print(
    #         f"""
    #     ------------------ Rede --------------------- 
    #     Bytes Enviados == {bytes_enviados/1000000:.2f} MB
    #     Bytes Recebidos == {bytes_recebidos/1000000:.2f} MB
    #     Quantidade de Erros na Entrada == {qtd_erros_entrada}
    #     Quantidade de Erros na Saida == {qtd_erros_saida}
    #     """
    #     )

    #     #executar(
    #     #    f"call RegistroRede('{bytes_enviados/1000000:.2f}','{bytes_recebidos/1000000:.2f}','{qtd_erros_entrada}','{qtd_erros_saida}')"
    #     #)

    #     return {
    #         "bytes_out": f"{bytes_enviados/1000000:.2f} MB/s",
    #         "bytes_in": f"{bytes_recebidos/1000000:.2f} MB/s",
    #         "qtd_erros_in": qtd_erros_entrada,
    #         "qtd_erros_saida": qtd_erros_saida,
    #     }


    # def exibir_info_temp(osv):
    #     if (osv) == "Linux":
    #         lista = []
    #         # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

    #         for i in range(0, len(psutil.sensors_temperatures()["acpitz"])):
    #             temperatura_cpu_label = psutil.sensors_temperatures()["acpitz"][i].label
    #             temperatura_cpu_atual = psutil.sensors_temperatures()["acpitz"][i].current
    #             lista.append([f"{temperatura_cpu_label}°C", f"{temperatura_cpu_atual}°C"])

    #         print(
    #             f"""
    #             ------------------ Temperatura --------------------- 
    #             Temperaturas do Entorno da CPU == {lista}
    #             """
    #         )
    #         #executar(
    #         #    f"call RegistroTemperatura('{temperatura_cpu_label}','{temperatura_cpu_atual}')"
    #         #)

    #         return {"cpu": f"{temperatura_cpu_atual}°C"}
    #     else:
    #         return {"cpu": "Não é possível capturar no Windows"}