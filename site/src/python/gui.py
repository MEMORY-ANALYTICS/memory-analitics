from tkinter import *
from tkinter import ttk

from captura_dados import *


class Gui(ttk.Frame):
    def __init__(self, system: str, cpu: dict, mem: dict, disco: dict, temp: dict, rede: dict, master=None):
        super().__init__(master)
        self.pack()

        self.master.title("Memory Analytics")
        self.master.geometry("720x280+50+50")

        self.system = system
        self.cpu = cpu
        self.mem = mem
        self.disco = disco
        self.temp = temp
        self.rede = rede

        ttk.Label(self, text=f"Sistema: {self.system}").grid(
            column=0, row=0, sticky=NW, pady=10, padx=2)
        ttk.Label(self, text=f'Cores de CPU: {cpu["qtd_cpu"]}').grid(
            column=1, row=0, sticky=NW, pady=10, ipadx=20)
        ttk.Label(self, text=f'Threads de CPU: {cpu["qtd_vcpu"]}').grid(
            column=2, row=0, sticky=NW, pady=10)

        ttk.Label(self, text='CPU').grid(column=1, row=1, sticky=NW, ipadx=20)
        ttk.Label(self, text='Memória').grid(
            column=2, row=1, sticky=NW, ipadx=20)
        ttk.Label(self, text='Disco').grid(
            column=3, row=1, sticky=NW, ipadx=30)
        ttk.Label(self, text='Rede:').grid(
            column=4, row=1, sticky=NW, ipadx=20)
        ttk.Label(self, text='Porcentagem de uso: ').grid(
            column=0, row=2, sticky=W, ipadx=10, padx=2)
        ttk.Label(self, text='Espaço total:').grid(
            column=0, row=3, sticky=W, padx=2)
        ttk.Label(self, text='Espaço livre:').grid(
            column=0, row=4, sticky=W, padx=2)
        ttk.Label(self, text='Espaço usado:').grid(
            column=0, row=5, sticky=W, padx=2)
        ttk.Label(self, text='Temperatura:').grid(
            column=0, row=6, sticky=W, padx=2)
        ttk.Label(self, text='Recebimento de dados:').grid(
            column=0, row=7, sticky=W, padx=2)
        ttk.Label(self, text='Envio de dados:').grid(
            column=0, row=8, sticky=W, padx=2)

        self.cpu_use_var = StringVar()
        self.cpu_temp_var = StringVar()
        self.cpu_use_var.set(f"{self.cpu['uso']}%")
        self.cpu_temp_var.set(f"{self.temp['cpu']}")

        self.cpu_use_label = ttk.Label(self, textvariable=self.cpu_use_var)
        self.cpu_temp_label = ttk.Label(self, textvariable=self.cpu_temp_var)
        self.cpu_use_label.grid(column=1, row=2, sticky=W)
        self.cpu_temp_label.grid(column=1, row=6, sticky=W)

        self.mem_use_var = StringVar()
        self.mem_total_var = StringVar()
        self.mem_livre_var = StringVar()
        self.mem_usada_var = StringVar()
        self.mem_use_var.set(f"{self.mem['pct_uso']}")
        self.mem_total_var.set(f"{self.mem['mem_total']}")
        self.mem_livre_var.set(f"{self.mem['mem_livre']}")
        self.mem_usada_var.set(f"{self.mem['mem_usada']}")

        self.mem_use_label = ttk.Label(self, textvariable=self.mem_use_var)
        self.mem_total_label = ttk.Label(self, textvariable=self.mem_total_var)
        self.mem_livre_label = ttk.Label(self, textvariable=self.mem_livre_var)
        self.mem_usada_label = ttk.Label(self, textvariable=self.mem_usada_var)
        self.mem_use_label.grid(column=2, row=2, sticky=W)
        self.mem_total_label.grid(column=2, row=3, sticky=W)
        self.mem_livre_label.grid(column=2, row=4, sticky=W)
        self.mem_usada_label.grid(column=2, row=5, sticky=W)

        self.disco_use_var = StringVar()
        self.disco_total_var = StringVar()
        self.disco_livre_var = StringVar()
        self.disco_usado_var = StringVar()
        self.disco_use_var.set(f"{self.disco['pct_uso']}")
        self.disco_livre_var.set(f"{self.disco['disc_livre']}")
        self.disco_usado_var.set(f"{self.disco['disc_usado']}")
        self.disco_total_var.set(f"{self.disco['disc_total']}")

        self.disco_use_label = ttk.Label(self, textvariable=self.disco_use_var)
        self.disco_total_label = ttk.Label(
            self, textvariable=self.disco_total_var)
        self.disco_livre_label = ttk.Label(
            self, textvariable=self.disco_livre_var)
        self.disco_usado_label = ttk.Label(
            self, textvariable=self.disco_usado_var)
        self.disco_use_label.grid(column=3, row=2, sticky=W)
        self.disco_total_label.grid(column=3, row=3, sticky=W)
        self.disco_livre_label.grid(column=3, row=4, sticky=W)
        self.disco_usado_label.grid(column=3, row=5, sticky=W)

        self.rede_in_var = StringVar()
        self.rede_out_var = StringVar()
        self.rede_in_var.set(f"{self.rede['bytes_in']}")
        self.rede_out_var.set(f"{self.rede['bytes_out']}")
        self.rede_in_label = ttk.Label(self, textvariable=self.rede_in_var)
        self.rede_out_label = ttk.Label(self, textvariable=self.rede_out_var)
        self.rede_in_label.grid(column=4, row=7, sticky=W)
        self.rede_out_label.grid(column=4, row=8, sticky=W)

        self.update_data()

    def update_data(self):
        self.cpu = exibir_dados_cpu()
        self.mem = exibir_info_mem()
        self.disco = exibir_info_disco()
        self.rede = exibir_info_rede()

        self.cpu_use_var.set(f"{self.cpu['uso']}%")
        self.cpu_temp_var.set(f"{self.temp['cpu']}")

        self.mem_use_var.set(f"{self.mem['pct_uso']}")
        self.mem_total_var.set(f"{self.mem['mem_total']}")
        self.mem_livre_var.set(f"{self.mem['mem_livre']}")
        self.mem_usada_var.set(f"{self.mem['mem_usada']}")

        self.disco_use_var.set(f"{self.disco['pct_uso']}")
        self.disco_total_var.set(f"{self.disco['disc_total']}")
        self.disco_livre_var.set(f"{self.disco['disc_livre']}")
        self.disco_usado_var.set(f"{self.disco['disc_usado']}")

        self.rede_in_var.set(f"{self.rede['bytes_in']}")
        self.rede_out_var.set(f"{self.rede['bytes_out']}")

        self.after(1000, self.update_data)
