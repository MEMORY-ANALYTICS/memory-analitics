package school.sptech;

import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Dao.RegistroDao;
import school.sptech.Crud.Dao.ServidorDao;

import java.util.List;
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
          | 3) Registros                |
          | 4) Recursos                 |
          | 5) Componentes              |
          | 6) Alertas                  |
          | 7) Exibir Processos         |
          | 8) Exibir Informações       |
          | 9) Sair                     |
          +-----------------------------+
          """);
    }

    public Integer solicitarOpcao() {
        System.out.println("Selecione uma opção:");
        return leitor.nextInt();
    }

    public void adicionarServidor() {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        System.out.println("Apelido do Servidor:");
        String apelidoServidor = leitorString.nextLine();

        System.out.println("Numero de serie do servidor:");
        String numeroSerieServidor = leitorString.nextLine();

        ServidorDao servidor = new ServidorDao(con);
        servidor.adicionarServidor(apelidoServidor, numeroSerieServidor);
    }

    public void listarSevidores() {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        ServidorDao servidor = new ServidorDao(con);
        System.out.println(servidor.selectAllServidor());
    }

    public void menuRegistros(){
        System.out.println("""
          +--------------------------+
          |         Registros        |
          +--------------------------+
          | 1) Visualizar todos      |
          | 2) Apenas CPU            |
          | 3) Apenas RAM            |
          | 4) Apenas Disco          |
          | 5) Apenas Rede           |
          +--------------------------+
                
                """);

        listarRegistros(solicitarOpcao());
    }

    public void listarRegistros(Integer opcao) {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();
        RegistroDao registro = new RegistroDao(con);

        // Adicionar uma determinada quantidade de registros atuais antes de exibir
        if (opcao.equals(1)) {
            System.out.println(registro.selectAllRegistros());
        } else if (opcao.equals(2)) {
            System.out.println(registro.selectAllRegistrosCpu());
        } else if (opcao.equals(3)) {
            System.out.println(registro.selectAllRegistroRam());
        } else if (opcao.equals(4)) {
            System.out.println(registro.selectAllRegistroDisco());
        } else if (opcao.equals(5)) {
            System.out.println("Em processo...");
        } else {
            exibirMenu();
        }
    }

    public void exibirMensagemSair() {
        System.out.println("Finalizado.");
    }

    public void exibirMensagemOpcaoInvalida() {
        System.out.println("Opção inválida, digite outro valor.");
    }

}
