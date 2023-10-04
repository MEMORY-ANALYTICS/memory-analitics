from captura_dados import *
from gui import Gui

def main():
    osv = plat.uname().system
    cpu = exibir_dados_cpu()
    mem = exibir_info_mem()
    disco = exibir_info_disco()
    rede = exibir_info_rede()
    temp = exibir_info_temp(osv)
    tela = Gui(osv, cpu, mem, disco, temp, rede)
    tela.mainloop()


if __name__ == "__main__":
    main()
