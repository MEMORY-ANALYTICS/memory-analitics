import os
import mysql.connector as sql
import mysql.connector.errorcode
from dotenv import load_dotenv

load_dotenv()

hostServer = os.environ.get('DB_HOST')
passwordServer = os.environ.get('DB_PASSWORD')
userServer = os.environ.get('DB_USER')
portServer =  int(os.environ.get("DB_PORT"))
databaseServer = os.environ.get('DB_NAME')

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
        # print(f"Executando comando: \n{instrucao}")
        comando.execute(instrucao)
        primeira_frase = instrucao.split()[0]
        if(primeira_frase == "SELECT"):
            retorno = comando.fetchall()
            return retorno
        elif (primeira_frase == "CALL"):
            variavel_ultimo_registro = instrucao.split()[3]
            comando.execute(f"SELECT {variavel_ultimo_registro}")
            retorno = comando.fetchall()
            if retorno != []:
                retorno = retorno[0][0]
            return retorno
        else:
            conexao.commit()
    except mysql.connector.Error as erro:
        print(instrucao)
        print("Erro ao executar comando!")
        print(erro)
    conexao.close()

def executarProcedure(instrucao):
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
        comando.execute(instrucao)
        conexao.commit()
    except mysql.connector.Error as erro:
        print("Erro ao executar comando!")
        print(erro)
    conexao.close()