from captura_dados import *
import datetime
def main(data_formatada):
    if(verificacao == True):
        osv = plat.uname().system
        exibir_dados_cpu(data_formatada)
        exibir_info_mem(data_formatada)
        exibir_info_disco(data_formatada)
        exibir_info_rede(data_formatada)
        exibir_info_temp(osv,data_formatada)
    else:
        print(f"Desculpe, o servidor {nome_user} ainda não foi cadastrado em nosso sistema, por favor acesse nosso site e cadastre este servidor.")
if __name__ == "__main__":
    while True:
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime('%Y-%m-%d %H:%M:%S')
        main(data_formatada)
        sleep(5)
