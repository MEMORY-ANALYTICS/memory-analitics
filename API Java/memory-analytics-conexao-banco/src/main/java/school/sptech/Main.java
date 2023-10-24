package school.sptech;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.rede.Rede;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Dao.ComponenteDao;
import school.sptech.Crud.Dao.RegistroDao;
import school.sptech.Crud.Dao.ServidorDao;
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


        Processos p1 = new Processos();
        p1.listarTodosProcessos();

        Informacoes i1 = new Informacoes();
        i1.pegarInformacoes();
//        ServidorDao servidor = new ServidorDao(con);
//        servidor.adicionarServidor("Servidor1", "ABC12");
//        System.out.println(servidor.selectAllServidor());

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