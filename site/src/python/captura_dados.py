import datetime
import platform as plat
from time import sleep
import psutil
from connection import executar
from message import mensagem_slack

nome_user = psutil.users()[0][0] # Pega o nome do usuario da máquina e o utiliza para descobrir o idServidor.
data_atual = datetime.datetime.now()
id_server = executar(f"SELECT idServidor FROM servidor WHERE apelidoServidor = 'SERVIDOR D';")
if id_server == []:
    verificacao = False
else:
    verificacao = True
    lista_componentes = executar(
    f"SELECT * FROM componente WHERE fkServidor = {id_server[0][0]}") 
    
    def verificar_recurso():
        global lista_componentes_sem_cadastro
        global qtd_componentes
        global lista_recurso
        qtd_cpu = 0
        qtd_ram = 0
        qtd_disco = 0
        qtd_rede = 0
        ids_cpu = []
        ids_ram = []
        ids_disco = []
        ids_rede = []
        lista_recurso = []

        qtd_componentes = len(lista_componentes)
        for componente_da_vez in lista_componentes:
            match componente_da_vez[3]:
                case "CPU":
                    qtd_cpu+=1
                    ids_cpu.append(componente_da_vez[0])
                case "RAM":
                    qtd_ram+=1
                    ids_ram.append(componente_da_vez[0])
                case "DISCO":
                    qtd_disco+=1
                    ids_disco.append(componente_da_vez[0])
                case "REDE":
                    qtd_rede+=1
                    ids_rede.append(componente_da_vez[0])
                case _:
                    print(f"Componente {componente_da_vez[3]} não é reconhecido pelo nosso sistema.")
        # print(lista_componentes)
        # print(ids_cpu)
        # print(ids_ram)
        # print(ids_disco)
        # print(ids_rede)
        i = 0
        qtd_recurso = len(lista_recurso)
        lista_componentes_sem_cadastro = []
        while i < len(lista_componentes):
            lista_recurso += executar(
                f"SELECT * FROM recurso WHERE fkComponente = {lista_componentes[i][0]}"
            )
            if qtd_recurso == len(lista_recurso):
                lista_componentes_sem_cadastro += [lista_componentes[i]]
            else:
                qtd_recurso = len(lista_recurso)
            i+=1
        # print(lista_recurso)
        # print(lista_componentes_sem_cadastro)
    verificar_recurso()
    # =-=-=-=-=-=-=-=-=- CPU -=-=-=-=-=-=-=-=-=-=

    def exibir_dados_cpu():

        verificar_recurso()

        qtd_cpus_virtuais = psutil.cpu_count()
        qtd_cpus_fisicos = psutil.cpu_count(logical=False)
        uso_cpus = psutil.cpu_percent(interval=None, percpu=True)
        uso_cpu_geral = psutil.cpu_percent(interval=None, percpu=False)
        frequencia_cpu_atual = psutil.cpu_freq().current
        frequencia_cpu_max = psutil.cpu_freq().max
        frequencia_cpu_min = psutil.cpu_freq().min
        i = 0
        if len(lista_componentes_sem_cadastro) != 0:
                    while i < len(lista_componentes_sem_cadastro):
                        if(lista_componentes_sem_cadastro[i][3] == "CPU"):
                            k = 0
                            while k < len(uso_cpus):
                                 if k == 0:
                                     executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('CPU',{lista_componentes_sem_cadastro[i][0]});")
                                 k+=1
                                 executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Core {k}',{lista_componentes_sem_cadastro[i][0]});")
                            break
                        i+=1
        i = 0
        print(f"""
        --------------------- CPU ---------------------
        Quantidade de CPUs Virtuais == {qtd_cpus_virtuais}         
        Quantidade de CPUs Fisicos == {qtd_cpus_fisicos}
        """)
        while i < len(uso_cpus):
            print(
                f"""        Uso por CPU : Core {i+1} == {uso_cpus[i]}""")
            i+=1
        print(f"""
        Média de uso da CPU (%) == {uso_cpu_geral}                 
        Atual da CPU == {frequencia_cpu_atual} MHz      
        Frequência Máxima da CPU == {frequencia_cpu_max} MHz       
        Frequência Mínima da CPU == {frequencia_cpu_min} MHz       
        """)

    # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=

    def exibir_info_mem():

        verificar_recurso()
        
        memoria_usada = psutil.virtual_memory().used
        memoria_total = psutil.virtual_memory().total
        memoria_livre = psutil.virtual_memory().free
        memoria_disponivel = psutil.virtual_memory().available
        porcentagem_uso_memoria = round((memoria_usada * 100) / memoria_total, 2)

        if len(lista_componentes_sem_cadastro) != 0:
            i = 0
            ram = 0
            while i < len(lista_componentes_sem_cadastro):
                if(lista_componentes_sem_cadastro[i][3] == "RAM"):
                    if i == 0:
                        executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('RAM', {lista_componentes_sem_cadastro[i][0]});")                        
                    ram+=1
                    executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Leitura RAM {ram}', {lista_componentes_sem_cadastro[i][0]});")
                    break
                i+=1

        print(f"""
        ------------------ Memória --------------------- 
        Memória Total == {memoria_total/1000000000:.2f} GB 
        Memória Usada == {memoria_usada/1000000000:.2f} GB
        Memória Livre == {memoria_livre/1000000000:.2f} GB
        Memória Disponível == {memoria_disponivel/1000000000:.2f} GB
        Ram usada (%) == {porcentagem_uso_memoria}
        """)

        if memoria_usada / (10**9) > 7:
            print(
                mensagem_slack(
                    f"""O uso de memória ram é excessivo!
                                    Data e hora do alerta: {data_atual}"""
                )
            )

    # -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=

    def exibir_info_disco():

        verificar_recurso()

        particoes_disco = psutil.disk_partitions()
        uso_total_disco = (psutil.disk_usage(f"/").total)/1000000000
        disco_usado = (psutil.disk_usage(f"/").used)/1000000000
        disco_livre = (psutil.disk_usage(f"/").free)/1000000000
        porcent_disco = psutil.disk_usage(f"/").percent

        if len(lista_componentes_sem_cadastro) != 0:
            i = 0
            disco =0
            while i < len(lista_componentes_sem_cadastro):
                if(lista_componentes_sem_cadastro[i][3] == "DISCO"):
                    if i == 0:
                        executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Disco', {lista_componentes_sem_cadastro[i][0]});")                        
                    disco+=1
                    executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Disco {disco}', {lista_componentes_sem_cadastro[i][0]});")
                    break
                i+=1

        print(f"""
        ------------------ Disco --------------------- 
        Disco Total == {uso_total_disco:.2f} GB 
        Disco Usado == {disco_usado:.2f} GB
        Disco Disponível == {disco_livre:.2f} GB
        Disco Usado (%) == {porcent_disco} %
        """)

    # -=-=-=-=-=-=-=-=-=- Rede -=-=-=-=-=-=-=-=-=-=

    def exibir_info_rede():

        verificar_recurso()

        bytes_enviados = (psutil.net_io_counters().bytes_sent)/1000000
        bytes_recebidos = (psutil.net_io_counters().bytes_recv)/1000000
        qtd_erros_entrada = psutil.net_io_counters().errin
        qtd_erros_saida = psutil.net_io_counters().errout

        if len(lista_componentes_sem_cadastro) != 0:
            i = 0
            while i < len(lista_componentes_sem_cadastro):
                if(lista_componentes_sem_cadastro[i][3] == "REDE"):
                    executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Leitura REDE', {lista_componentes_sem_cadastro[i][0]});")
                    break
                i+=1

        print(f"""
        ------------------ Rede --------------------- 
        Bytes Enviados (Upload) == {bytes_enviados:.2f} Mbps
        Bytes Recebidos (Download) == {bytes_recebidos:.2f} Mbps
        Quantidade de Erros na Entrada == {qtd_erros_entrada}
        Quantidade de Erros na Saida == {qtd_erros_saida}
        """)

    # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

    def exibir_info_temp(osv):

        verificar_recurso()

        if (osv) == "Linux":
            lista = []

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
