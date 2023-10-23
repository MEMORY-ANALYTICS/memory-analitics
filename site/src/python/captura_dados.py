import datetime
import platform as plat
from time import sleep
import psutil
from connection import executar
from message import mensagem_slack

nome_user = psutil.users()[0][0] # Pega o nome do usuario da máquina e o utiliza para descobrir o idServidor.
data_atual = datetime.datetime.now()
# id_server = executar(
#     f"SELECT idServidor FROM servidor WHERE apelidoServidor = '{nome_user}';"
# )
# if id_server == []:
#     print(f"Desculpe, o servidor {nome_user} ainda não foi cadastrado em nosso sistema, por favor acesse nosso site e cadastre este servidor.")
# else:
#     lista_componentes = executar(
#         f"SELECT * FROM componente WHERE fkServidor = {id_server[0][0]}"
#     )
#     qtd_componentes = len(lista_componentes)

#     qtd_cpu = 0
#     qtd_ram = 0
#     qtd_disco = 0
#     qtd_rede = 0
#     for componente_da_vez in lista_componentes:
#         match componente_da_vez[3]:
#             case "CPU":
#                  qtd_cpu+=1
#             case "RAM":
#                 qtd_ram+=1
#             case "DISCO":
#                 qtd_disco+=1
#             case "REDE":
#                 qtd_rede+=1
#             case _:
#                 print(f"Componente {componente_da_vez[3]} não é reconhecido pelo nosso sistema.")
#     print(qtd_cpu)
#     print(qtd_disco)
#     print(qtd_ram)
#     print(qtd_rede)




# =-=-=-=-=-=-=-=-=- CPU -=-=-=-=-=-=-=-=-=-=

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

def exibir_info_mem():
    # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=

    list_media_memoria = []
    memoria_usada = psutil.virtual_memory().used
    memoria_total = psutil.virtual_memory().total
    memoria_livre = psutil.virtual_memory().free
    memoria_disponivel = psutil.virtual_memory().available
    porcentagem_uso_memoria = round((memoria_usada * 100) / memoria_total, 2)

    print(
        f"""
    ------------------ Memória --------------------- 
    Memória Total == {memoria_total/1000000000:.2f} GB 
    Memória Usada == {memoria_usada/1000000000:.2f} GB
    Memória Livre == {memoria_livre/1000000000:.2f} GB
    Memória Disponível == {memoria_disponivel/1000000000:.2f} GB
    Ram usada (%) == {porcentagem_uso_memoria}
    """
    )

    if memoria_usada / (10**9) > 7:
        print(
            mensagem_slack(
                f"""O uso de memória ram é excessivo!
                                Data e hora do alerta: {data_atual}"""
            )
        )

# -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=

def exibir_info_disco():

    particoes_disco = psutil.disk_partitions()
    uso_total_disco = (psutil.disk_usage(f"/").total)/1000000000
    disco_usado = (psutil.disk_usage(f"/").used)/1000000000
    disco_livre = (psutil.disk_usage(f"/").free)/1000000000
    porcent_disco = psutil.disk_usage(f"/").percent

    print(
            f"""
        ------------------ Disco --------------------- 
        Disco Total == {uso_total_disco:.2f} GB 
        Disco Usado == {disco_usado:.2f} GB
        Disco Disponível == {disco_livre:.2f} GB
        Disco Usado (%) == {porcent_disco} %
        """
        )

# -=-=-=-=-=-=-=-=-=- Rede -=-=-=-=-=-=-=-=-=-=

def exibir_info_rede():

    bytes_enviados = (psutil.net_io_counters().bytes_sent)/1000000
    bytes_recebidos = (psutil.net_io_counters().bytes_recv)/1000000
    qtd_erros_entrada = psutil.net_io_counters().errin
    qtd_erros_saida = psutil.net_io_counters().errout

    print(
        f"""
    ------------------ Rede --------------------- 
    Bytes Enviados (Upload) == {bytes_enviados:.2f} MB
    Bytes Recebidos (Download) == {bytes_recebidos:.2f} MB
    Quantidade de Erros na Entrada == {qtd_erros_entrada}
    Quantidade de Erros na Saida == {qtd_erros_saida}
    """
    )


def exibir_info_temp(osv):
    if (osv) == "Linux":
        lista = []
        # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

        for i in range(0, len(psutil.sensors_temperatures()["acpitz"])):
            temperatura_cpu_label = psutil.sensors_temperatures()["acpitz"][i].label
            temperatura_cpu_atual = psutil.sensors_temperatures()["acpitz"][i].current
            lista.append([f"{temperatura_cpu_label}°C", f"{temperatura_cpu_atual}°C"])

        print(
            f"""
            ------------------ Temperatura --------------------- 
            Temperaturas do Entorno da CPU == {lista}
            """
        )
    else:
        print("------------------ Temperatura --------------------- \n Não é possível capturar temperatura no Windows\n\n")
