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
    f"SELECT * FROM componente WHERE fkServidor = {id_server[0][0]};"
)
print(id_server[0][0])
print(teste)