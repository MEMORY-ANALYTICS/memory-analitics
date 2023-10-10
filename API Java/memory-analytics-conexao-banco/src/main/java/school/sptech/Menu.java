package school.sptech;

import java.util.Scanner;

public class Menu {
    private Scanner leitorNumero;
    private Scanner leitorString;
    //private ServidorDao servidorDao;
    //private MedidaComponenteDao medidaComponenteDao;

    public Menu(Scanner leitorNumero, Scanner leitorString) {
        this.leitorNumero = leitorNumero;
        this.leitorString = leitorString;
    }

    public void exibirMenu(){
        System.out.println("""
          +-----------------------------+
          |      Memory Analytics       |
          +-----------------------------+
          | 1) Buscar Servidor por nome |
          | 2)                          |
          | 3)                          |
          | 4)                          |
          | 5)                          |
          | 6) Sair                     |
          +-----------------------------+
          """);
    }
}
