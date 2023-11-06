package school.sptech;

import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Dao.ComponenteDao;
import school.sptech.Crud.Dao.RecursoDao;
import school.sptech.Crud.Dao.RegistroDao;
import school.sptech.Crud.Dao.ServidorDao;

import java.util.List;
import java.util.Scanner;

public class Menu {
    private Scanner leitor;
    private Scanner leitorString;
    private ServidorDao servidorDao;
    private RecursoDao recursoDao;
    private ComponenteDao componenteDao;
    private RegistroDao registroDao;

    public Menu(Scanner leitor, Scanner leitorString, ServidorDao servidorDao, RecursoDao recursoDao, ComponenteDao componenteDao, RegistroDao registroDao) {
        this.leitor = leitor;
        this.leitorString = leitorString;
        this.servidorDao = servidorDao;
        this.recursoDao = recursoDao;
        this.componenteDao = componenteDao;
        this.registroDao = registroDao;
    }

    public void exibirMenu(){

        System.out.println("""
          +-----------------------------+
          |      Memory Analytics       |
          +-----------------------------+
          | 1) Adicionar Servidor       |
          | 2) Exibir Servidores        |
          | 3) Recursos                 |
          | 4) Registros                |
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

        servidorDao.adicionarServidor(apelidoServidor, numeroSerieServidor);
    }

    public void adicionarRecurso() {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        System.out.println("Digite o id do componente no qual o recurso pertence:");
        Integer fkComponente = leitor.nextInt();

        //Fazer validação com select no banco para ver se o id componente existe e se ele é da memory analytics
        recursoDao.adicionarRecursoCpu(fkComponente);
    }

    public void listarSevidores() {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        ServidorDao servidor = new ServidorDao(con);
        System.out.println(servidor.selectAllServidor());
    }

    public void menuRecursos(){
        System.out.println("""
          +--------------------------+
          |         Recursos         |
          +--------------------------+
          | 1) Adicionar Recurso     |
          | 2) Visualizar todos      |
          | 3) Apenas CPU            |
          | 4) Apenas RAM            |
          | 5) Apenas Disco          |
          | 6) Apenas Rede           |
          +--------------------------+
                
                """);
        opcoesRecursos(solicitarOpcao());
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

        // Adicionar uma determinada quantidade de registros atuais antes de exibir
        if (opcao.equals(1)) {
            System.out.println(registroDao.selectAllRegistros());
        } else if (opcao.equals(2)) {
            System.out.println(registroDao.selectAllRegistrosCpu());
        } else if (opcao.equals(3)) {
            System.out.println(registroDao.selectAllRegistroRam());
        } else if (opcao.equals(4)) {
            System.out.println(registroDao.selectAllRegistroDisco());
        } else if (opcao.equals(5)) {
            System.out.println("Em processo...");
        } else {
            exibirMenu();
        }

    }

    public void opcoesRecursos(Integer opcao) {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        // Adicionar uma determinada quantidade de registros atuais antes de exibir
        if (opcao.equals(1)) {
            System.out.println("Menu para adicionar recurso");
        } else if (opcao.equals(2)) {
            System.out.println(recursoDao.selectAllRecursosMemoryAnalytics());
        } else if (opcao.equals(3)) {
            System.out.println(recursoDao.selectAllRecursosCpu());
        } else if (opcao.equals(4)) {
            System.out.println(recursoDao.selectAllRecursosRam());
        } else if (opcao.equals(5)) {
            System.out.println(recursoDao.selectAllRecursosRam());
        } else if (opcao.equals(6)){
            System.out.println(recursoDao.selectAllRecursosRede());
        }else {
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
