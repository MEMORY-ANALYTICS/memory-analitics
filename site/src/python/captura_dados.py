import platform as plat
import datetime
from time import sleep
import psutil
from connection import executar,executarProcedure
from message import mensagem_slack

nome_user = psutil.users()[0][0] # Pega o nome do usuario da máquina e o utiliza para descobrir o idServidor.
# nome_user = 'Servidor C'
id_server = executar(f"SELECT idServidor FROM servidor WHERE apelidoServidor = '{nome_user}';")
if id_server == []:
    verificacao = False
    print(nome_user)
    print(verificacao)
else:
    
    id_server = id_server[0][0]
    verificacao = True
    bcpu = True
    bram = True
    bdisco = True
    brede = True

    lista_componentes = executar(
    f"SELECT * FROM componente WHERE fkServidor = {id_server};")


    horario_ultimo_registro = executar(
        f"CALL SelectUltimoRegistro ({id_server}, @ultimoRegistro );")
    
    if horario_ultimo_registro != None and horario_ultimo_registro != []:
    
        # PEGANDO HORARIO E DATA ATUAL E FORMATANDO
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime('%Y-%m-%d %H:%M:%S')

        # FORMATANDO A DATA E HORARIO RECEBIDOS DO BANCO (ULTIMO REGISTRO)
        horario_datetime = datetime.datetime.strptime(horario_ultimo_registro, '%Y-%m-%d %H:%M:%S')
        horario_ultimo_registro_formatado = horario_datetime.strftime('%d-%m-%Y %H:%M:%S')

        # A VARIAVEL DIFERENÇA RECEBE UM OBJETO TIPO DATETIME QUE SERÁ A DIFERENÇA DAS DUAS DATAS.
        diferenca = data_atual - horario_datetime

        # TRANSFORMANDO A DIFERENCA EM SEGUNDOS E USANDO OS SEGUNDOS PARA DESCOBRIR HORAS, MINUTOS E SEGUNDOS.
        dias = diferenca.days
        horas = diferenca.seconds // 3600
        minutos = (diferenca.seconds // 60) % 60
        segundos = diferenca.seconds % 60

        # CRIANDO A MÉTRICA DE DOWNTIME.
        if dias > 0 or horas > 0 or minutos > 0 or segundos >= 10:
            # FORMATANDO OS VALORES E OS EXIBINDO.
            if dias == 1:
                dias = f"{dias} dia"
            else:
                dias = f"{dias} dias"
            if horas  < 10:
                horas = f"0{horas}"
            if minutos  < 10:
                minutos = f"0{minutos}"
            if segundos < 10:
                segundos = f"0{segundos}"

            print(f"""
                DOWNTIME DO SERVIDOR DETECTADO!!!
                Data do último Registro: {horario_ultimo_registro_formatado}
                Data Atual: {data_formatada}
                TEMPO DE DOWNTIME: {dias} e {horas}:{minutos}:{segundos}""")
            
            # ENVIANDO OS DADOS PARA O BANCO
            executarProcedure(f"CALL downtime({id_server})")
            

    def verificar_recurso():
        global lista_componentes_sem_recurso
        global lista_recurso
        lista_recurso = []
        ids_cpu = []
        ids_ram = []
        ids_disco = []
        ids_rede = []
        for componente_da_vez in lista_componentes:
            match componente_da_vez[3]:
                case "CPU":
                    bcpu = True
                    ids_cpu.append(componente_da_vez[0])
                case "RAM":
                    bram = True
                    ids_ram.append(componente_da_vez[0])
                case "DISCO":
                    bdisco = True
                    ids_disco.append(componente_da_vez[0])
                case "REDE":
                    brede = True
                    ids_rede.append(componente_da_vez[0])
                case _:
                    print(f"Componente {componente_da_vez[3]} não é reconhecido pelo nosso sistema.")

        # Verifica quantos recursos tem na lista (Começando em 0 pois a array é incializada vazia)
        qtd_recurso = len(lista_recurso)
        # Cria lista que será utilizada para armazenar todas as informações dos componentes sem recurso
        lista_componentes_sem_recurso = []

        i = 0
        while i < len(lista_componentes):
            # variáveis para facilitar a leitura do código
            informacoes_do_componente = lista_componentes[i]
            id_do_componente = lista_componentes[i][0]
            
            # Soma os recursos do atual componente na lista, caso o componente não tenha recursos não haverá atribuição.
            lista_recurso += executar(
                f"SELECT * FROM recurso WHERE fkComponente = {id_do_componente}"
            )
            # Se o componente não receber a lista dos recursos, qtd_recurso e o tamanho mda lista de recursos terão o mesmo valor,
            # então o componente será adicionada a lista de componentes sem recurso.
            if qtd_recurso == len(lista_recurso):
                lista_componentes_sem_recurso += [informacoes_do_componente]
            else:
                # Se a lista e qtd_recursos forem diferentes, significa que foi atribuido novos valores ao vetor lista_recursos,
                # dessa forma significa que os recursos desse componente ja foram adicionados então qtd_recurso se iguala novamente a lista.
                qtd_recurso = len(lista_recurso)
            i+=1
    # =-=-=-=-=-=-=-=-=- CPU -=-=-=-=-=-=-=-=-=-=

    def exibir_dados_cpu(data_formatada):
        verificar_recurso()
        if bcpu:

            qtd_cpus_virtuais = psutil.cpu_count()
            qtd_cpus_fisicos = psutil.cpu_count(logical=False)
            uso_cpus = psutil.cpu_percent(interval=None, percpu=True)
            uso_cpu_geral = psutil.cpu_percent(interval=None, percpu=False)
            frequencia_cpu_atual = psutil.cpu_freq().current
            frequencia_cpu_max = psutil.cpu_freq().max
            frequencia_cpu_min = psutil.cpu_freq().min

            i = 0
            if len(lista_componentes_sem_recurso) != 0:
                        while i < len(lista_componentes_sem_recurso):
                            # variáveis para facilitar a leitura do código
                            nome_componente_sem_recurso = lista_componentes_sem_recurso[i][3]
                            id_do_componente_sem_recurso = lista_componentes_sem_recurso[i][0]
                            if(nome_componente_sem_recurso == "CPU"):
                                k = 0
                                # Adiciona o CPU e todos seus Cores baseado na quantidade total de núcleos físicos
                                while k < qtd_cpus_fisicos:
                                    if k == 0:
                                        # Caso o contador K seja nulo será adicionado uma tupla que representará os valores totais da CPU.
                                        executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('CPU',{id_do_componente_sem_recurso});")
                                    k+=1
                                    # Utilizo o contador K para adicionar o número do Core ao banco de dados, diferenciando todos eles.
                                    executar(f"INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Core {k}',{id_do_componente_sem_recurso});")
                                    # Após adicionar todos os recursos, quebro o laço de repetição, pois não será mais necessário, o CPU ja foi encontrado.
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
            Frequência Atual da CPU == {frequencia_cpu_atual} MHz      
            Frequência Máxima da CPU == {frequencia_cpu_max} MHz       
            Frequência Mínima da CPU == {frequencia_cpu_min} MHz       
            """)

            i = 0
            core = 0
            while i < len(lista_recurso):
                # variáveis para facilitar a leitura do código
                primeira_frase = lista_recurso[i][1].split()[0]
                id_do_recurso = lista_recurso[i][0]

                if primeira_frase == "CPU":
                    executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                            ({float(qtd_cpus_virtuais)},'{data_formatada}',{id_do_recurso},10),
                            ({float(qtd_cpus_fisicos)},'{data_formatada}',{id_do_recurso},11),
                            ({uso_cpu_geral},'{data_formatada}',{id_do_recurso},1),
                            ({frequencia_cpu_atual},'{data_formatada}',{id_do_recurso},5),
                            ({frequencia_cpu_max},'{data_formatada}',{id_do_recurso},6),
                            ({frequencia_cpu_min},'{data_formatada}',{id_do_recurso},7);""")
                elif primeira_frase == "Core":
                    uso_cpu_da_vez = uso_cpus[core]
                    executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                            ({uso_cpu_da_vez},'{data_formatada}',{id_do_recurso},1);""")
                    core+=1
                i+=1

    # -=-=-=-=-=-=-=-=-=-= Memória -=-=-=-=-=-=-=-=-=-=

    def exibir_info_mem(data_formatada):
        verificar_recurso()
        if bram:
            
            memoria_usada = psutil.virtual_memory().used/1000000000
            memoria_total = psutil.virtual_memory().total/1000000000
            memoria_disponivel = psutil.virtual_memory().available/1000000000
            porcentagem_uso_memoria = round((memoria_usada * 100) / memoria_total, 2)

            if len(lista_componentes_sem_recurso) != 0:
                i = 0
                ram = 0
                while i < len(lista_componentes_sem_recurso):
                    # variáveis para facilitar a leitura do código
                    nome_componente_sem_recurso = lista_componentes_sem_recurso[i][3]
                    id_do_componente_sem_recurso = lista_componentes_sem_recurso[i][0]
                    if(nome_componente_sem_recurso == "RAM"):
                        ram+=1
                        executar(f"""INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Leitura RAM {ram}', {id_do_componente_sem_recurso});""")
                        break
                    i+=1

            print(f"""
            ------------------ Memória --------------------- 
            Memória Total == {memoria_total:.2f} GB 
            Memória Usada == {memoria_usada:.2f} GB
            Memória Disponível == {memoria_disponivel:.2f} GB
            Ram usada (%) == {porcentagem_uso_memoria}
            """)

            i = 0
            while i < len(lista_recurso):
                # variáveis para facilitar a leitura do código
                id_do_recurso = lista_recurso[i][0]
                primeira_frase = lista_recurso[i][1].split()[0]
                if primeira_frase == "Leitura":
                    segunda_frase = lista_recurso[i][1].split()[1]
                    if segunda_frase == "RAM":
                        executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                        ({memoria_total:.2f},'{data_formatada}',{id_do_recurso},2),
                        ({memoria_disponivel:.2f},'{data_formatada}',{id_do_recurso},3),
                        ({memoria_usada:.2f},'{data_formatada}',{id_do_recurso},4),
                        ({porcentagem_uso_memoria},'{data_formatada}',{id_do_recurso},1);
                        """)
                i+=1


            if memoria_usada / (10**9) > 7:
                print(
                    mensagem_slack(
                        f"""O uso de memória ram é excessivo!
                                        Data e hora do alerta: '{data_formatada}'"""
                    )
                )

    # -=-=-=-=-=-=-=-=-=-= Disco -=-=-=-=-=-=-=-=-=-=

    def exibir_info_disco(data_formatada):
        verificar_recurso()
        if bdisco:

            # particoes_disco = psutil.disk_partitions()
            uso_total_disco = (psutil.disk_usage(f"/").total)/1000000000
            disco_usado = (psutil.disk_usage(f"/").used)/1000000000
            disco_livre = (psutil.disk_usage(f"/").free)/1000000000
            porcent_disco = psutil.disk_usage(f"/").percent

            if len(lista_componentes_sem_recurso) != 0:
                i = 0
                disco =0
                while i < len(lista_componentes_sem_recurso):
                    # variáveis para facilitar a leitura do código
                    nome_componente_sem_recurso = lista_componentes_sem_recurso[i][3]
                    id_do_componente_sem_recurso = lista_componentes_sem_recurso[i][0]
                    if(nome_componente_sem_recurso == "DISCO"):                       
                        disco+=1
                        executar(f"""INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Disco {disco}', {id_do_componente_sem_recurso});""")
                        break
                    i+=1

            print(f"""
            ------------------ Disco --------------------- 
            Disco Total == {uso_total_disco:.2f} GB 
            Disco Usado == {disco_usado:.2f} GB
            Disco Disponível == {disco_livre:.2f} GB
            Disco Usado (%) == {porcent_disco} %
            """)

            i = 0
            while i < len(lista_recurso):
                # variáveis para facilitar a leitura do código
                id_do_recurso = lista_recurso[i][0]
                primeira_frase = lista_recurso[i][1].split()[0]
                if primeira_frase == "Disco":
                    executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                    ({uso_total_disco:.2f},'{data_formatada}',{id_do_recurso},2),
                    ({disco_livre:.2f},'{data_formatada}',{id_do_recurso},3),
                    ({disco_usado:.2f},'{data_formatada}',{id_do_recurso},4),
                    ({porcent_disco},'{data_formatada}',{id_do_recurso},1);
                    """)
                i+=1

    # -=-=-=-=-=-=-=-=-=- Rede -=-=-=-=-=-=-=-=-=-=

    def exibir_info_rede(data_formatada):
        verificar_recurso()
        if brede:

            bytes_enviados = (psutil.net_io_counters().bytes_sent)/10000000
            bytes_recebidos = (psutil.net_io_counters().bytes_recv)/10000000
            qtd_erros_entrada = psutil.net_io_counters().errin
            qtd_erros_saida = psutil.net_io_counters().errout

            if len(lista_componentes_sem_recurso) != 0:
                i = 0
                while i < len(lista_componentes_sem_recurso):
                    # variáveis para facilitar a leitura do código
                    nome_componente_sem_recurso = lista_componentes_sem_recurso[i][3]
                    id_do_componente_sem_recurso = lista_componentes_sem_recurso[i][0]

                    if(nome_componente_sem_recurso == "REDE"):
                        executar(f"""INSERT INTO recurso (tipoRecurso, fkComponente) VALUES ('Leitura REDE', {id_do_componente_sem_recurso});""")
                        break
                    i+=1

            print(f"""
            ------------------ Rede --------------------- 
            Bytes Enviados (Upload) == {bytes_enviados:.2f} Mbps
            Bytes Recebidos (Download) == {bytes_recebidos:.2f} Mbps
            Quantidade de Erros na Entrada == {qtd_erros_entrada}
            Quantidade de Erros na Saida == {qtd_erros_saida}
            """)

            i = 0
            while i < len(lista_recurso):
                # variáveis para facilitar a leitura do código
                id_do_recurso = lista_recurso[i][0]
                primeira_frase = lista_recurso[i][1].split()[0]
                if primeira_frase == "Leitura":
                    segunda_frase = lista_recurso[i][1].split()[1]
                    if segunda_frase == "REDE":
                        executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                        ({bytes_enviados:.2f},'{data_formatada}',{id_do_recurso},8),
                        ({bytes_recebidos:.2f},'{data_formatada}',{id_do_recurso},9),
                        ({qtd_erros_entrada},'{data_formatada}',{id_do_recurso},12),
                        ({qtd_erros_saida},'{data_formatada}',{id_do_recurso},13);
                        """)
                i+=1

    # -=-=-=-=-=-=-=-=-=-= Temperatura -=-=-=-=-=-=-=-=-=-=

    def exibir_info_temp(osv,data_formatada):
        verificar_recurso()
        if bcpu:

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
                i = 0
                while i < len(lista_recurso):
                    # variáveis para facilitar a leitura do código
                    id_do_recurso = lista_recurso[i][0]
                    primeira_frase = lista_recurso[i][1].split()[0]
                    if primeira_frase == "CPU":
                        executar(f"""INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES
                                ({temperatura_cpu_atual},'{data_formatada}',{id_do_recurso},15),
                                ({temperatura_cpu_label},'{data_formatada}',{id_do_recurso},15);
                                """)
            else:
                print("------------------ Temperatura --------------------- \n Não é possível capturar temperatura no Windows\n\n")
