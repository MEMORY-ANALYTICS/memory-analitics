from time import sleep
from tkinter import *
from tkinter import ttk


class Gui(ttk.Frame):
    def __init__(self, system: str, cpu: dict, master=None):
        super().__init__(master)
        self.pack()

        self.master.title("Memory Analytics")
        self.master.geometry("600x400+50+50")
        
        self.system = system
        self.cpu = cpu
        
        self.cpu_use_var = StringVar()
        self.cpu_use_var.set(f"Uso de CPU: {self.cpu['uso']}")
        
        self.system_label = ttk.Label(self, text=f"Sistema: {self.system}")
        self.system_label.grid(column=0, row=0)

        self.cpu_label = ttk.Label(self, textvariable=self.cpu_use_var)
        self.cpu_label.grid(column=0, row=1)

        self.update_cpu()

    def update_cpu(self):
        self.cpu_use_var.set(f"Uso de CPU: {self.cpu['uso']}")
        self.after(1000, self.update_cpu)

    def set_window(self):
        self.master.title("Memory Analytics")
        self.master.geometry("600x400+50+50")

def increment_cpu(cpu):
    cpu['uso'] += 1

def main():
    tela = Gui("Linux", {'uso': 23.2})
    tela.set_window()
    # tela.grid()
    tela.mainloop()


if __name__ == '__main__':
    main()
