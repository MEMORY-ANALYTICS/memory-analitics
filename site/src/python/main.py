from captura_dados import *
import datetime
from gui import Gui
def main(data_formatada):
    if(verificacao == True):
        osv = plat.uname().system
        cpu = exibir_dados_cpu(data_formatada)
        mem = exibir_info_mem(data_formatada)
        disco = exibir_info_disco(data_formatada)
        rede = exibir_info_rede(data_formatada)
        temp = exibir_info_temp(osv,data_formatada)
        # tela = Gui(osv, cpu, mem, disco, temp, rede)
        # tela.mainloop()
    else:
        print(f"Desculpe, o servidor {nome_user} ainda não foi cadastrado em nosso sistema, por favor acesse nosso site e cadastre este servidor.")
if __name__ == "__main__":
    while True:
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime('%Y-%m-%d %H:%M:%S')
        main(data_formatada)
        sleep(5)
