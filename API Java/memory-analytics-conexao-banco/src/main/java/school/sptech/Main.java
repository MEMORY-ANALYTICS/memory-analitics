package school.sptech;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.rede.Rede;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Dao.ComponenteDao;
import school.sptech.Crud.Dao.RecursoDao;
import school.sptech.Crud.Dao.RegistroDao;
import school.sptech.Crud.Dao.ServidorDao;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Servidor;
import school.sptech.Hardware.Informacoes;
import school.sptech.Hardware.Processos;
import school.sptech.Hardware.RedeInterface;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        Scanner leitorString = new Scanner(System.in);

        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        //Processos p1 = new Processos();
        //System.out.println(p1.listarTotalProcessos());

        //Informacoes i1 = new Informacoes();

        //i1.pegarInformacoes();

        ServidorDao servidor1 = new ServidorDao(con);
        //servidor1.adicionarServidor("Servidor1", "ABC12");
        //System.out.println(servidor1.selectAllServidor());

        ComponenteDao componente1 = new ComponenteDao(con);
        //componente1.adicionarCpu("0", "70", 5);
        //System.out.println(componente1.selectAllComponente());

        RecursoDao recurso1 = new RecursoDao(con);
        //recurso1.adicionarRecursoCpu(17);
        //System.out.println(recurso1.selectAllRecursosCpu());

        RegistroDao registro1 = new RegistroDao(con);
        //System.out.println(registro1.selectAllRegistros());

        //Looca looca = new Looca();
        //System.out.println(looca.getRede().getGrupoDeInterfaces().getInterfaces());
        //RedeInterface rede = new RedeInterface();
        //System.out.println(rede);

        Menu menu = new Menu(leitor, leitorString, servidor1, recurso1, componente1, registro1);
        Integer opcao;
//
//        do {
//            menu.exibirMenu();
//            opcao = menu.solicitarOpcao();
//
//            switch (opcao) {
//                case 1 -> menu.adicionarServidor();
//                case 2 -> menu.listarSevidores();
//
//                case 4 -> menu.menuRegistros();
//                case 9 -> menu.exibirMensagemSair();
//                default -> menu.exibirMensagemOpcaoInvalida();
//            }
//
//        } while(opcao != 9);


        Processos p1 = new Processos();
        p1.listarTodosProcessos();
    }

}