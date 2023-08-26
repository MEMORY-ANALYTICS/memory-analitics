import mysql.connector as sql
import mysql.connector.errorcode

hostServer = 'localhost'
passwordServer = 'sptech'
userServer = 'aluno'
portServer = 3306
databaseServer = 'bd_MemoryAnalytics'


def executar(instrucao):

    try:
        conexao = sql.connect(
            host = hostServer,
            password = passwordServer,
            user = userServer,
            port = portServer,
            database = databaseServer
        )

    except mysql.connector.Error as error:
        print('Erro ao efetuar conexão >>> ' + error)

    comando = conexao.cursor()

    try:
        print(f"Executando comando: \n{instrucao}")
        comando.execute(instrucao)
        conexao.commit()
    except mysql.connector.Error as erro:
        print('Erro ao executar comando!')

    comando.close()
    conexao.close()


