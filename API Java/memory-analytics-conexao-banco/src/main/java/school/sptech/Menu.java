package school.sptech;

import java.util.Scanner;

public class Menu {
    private Scanner leitor;
    private Scanner leitorString;

    public Menu(Scanner leitor, Scanner leitorString) {
        this.leitor = leitor;
        this.leitorString = leitorString;
    }

    public void exibirMenu(){

        System.out.println("""
          +-----------------------------+
          |      Memory Analytics       |
          +-----------------------------+
          | 1) Adicionar Servidor       |
          | 2) Exibir Servidores        |
          | 3) Exibir Registros         |
          | 4) Alertas                  |
          | 5) Exibir Processos         |
          | 6) Exibir Informações       |
          | 7) Sair                     |
          +-----------------------------+
          """);
    }

    public Integer solicitarOpcao() {
        System.out.println("Selecione uma opção:");
        return leitor.nextInt();
    }
}
