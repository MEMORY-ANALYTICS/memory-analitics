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
        servidor1.adicionarServidor("Servidor1", "ABC12");
        System.out.println(servidor1.selectAllServidor());

        ComponenteDao componente1 = new ComponenteDao(con);
        componente1.adicionarCpu("0", "70", 5);
        System.out.println(componente1.selectAllComponente());

        RecursoDao recurso1 = new RecursoDao(con);
        recurso1.adicionarRecursoCpu(17);
        System.out.println(recurso1.selectAllRecursosCpu());

        RegistroDao registro1 = new RegistroDao(con);


//        while(true) {
//            setTimeout(() -> {
//                System.out.println("a");
//                System.out.println("B");
//            }, 10000);
//
//        }
//
//    }
//    public static void setTimeout(Runnable runnable, int delay){
//        new Thread(() -> {
//            try {
//                Thread.sleep(delay);
//                runnable.run();
//            }
//            catch (Exception e){
//                System.err.println(e);
//            }
//        }).start();
//    }
    }
}