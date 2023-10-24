from captura_dados import *
from gui import Gui

def main():
    if(verificacao == True):
        osv = plat.uname().system
        cpu = exibir_dados_cpu()
        mem = exibir_info_mem()
        disco = exibir_info_disco()
        rede = exibir_info_rede()
        temp = exibir_info_temp(osv)
        # tela = Gui(osv, cpu, mem, disco, temp, rede)
        # tela.mainloop()
    else:
        print(f"Desculpe, o servidor {nome_user} ainda não foi cadastrado em nosso sistema, por favor acesse nosso site e cadastre este servidor.")
if __name__ == "__main__":
    while True:
        main()
        sleep(5)
