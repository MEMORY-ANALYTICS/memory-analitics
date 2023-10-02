import os
import mysql.connector as sql
import mysql.connector.errorcode
from dotenv import load_dotenv

load_dotenv()

hostServer = 'localhost'
passwordServer = 'urubu100'
userServer = 'urubu100'
portServer = '3306'
databaseServer = 'bd_MemoryAnalytics'

def executar(instrucao):
    try:
        conexao = sql.connect(
            host=hostServer,
            password=passwordServer,
            user=userServer,
            port=portServer,
            database=databaseServer,
        )

    except mysql.connector.Error as error:
        print(f"Erro ao efetuar conexão >>> {error}")

    comando = conexao.cursor()

    try:
        print(f"Executando comando: \n{instrucao}")
        comando.execute(instrucao)
        conexao.commit()
    except mysql.connector.Error as erro:
        print("Erro ao executar comando!")
        print(erro)
        
    conexao.close()
