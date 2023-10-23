package school.sptech;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Dao.ComponenteDao;
import school.sptech.Crud.Dao.RegistroDao;
import school.sptech.Crud.Dao.ServidorDao;
import school.sptech.Crud.Servidor;

import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Cpu cpu1 = new Cpu();
//        System.out.println(cpu1);

//        MemoriaRam m1 = new MemoriaRam();

//        System.out.println(m1);

        Looca looca = new Looca();
        System.out.println(Math.round(looca.getProcessador().getFrequencia() / 10.0),2);

        Math.pow(looca.getProcessador().getFrequencia(), -9);


//        System.out.println(
//        looca.getGrupoDeDiscos().getDiscos()
//        );

//        DiscoLocal d1 = new DiscoLocal();

//        d1.listarTodosDiscos();

        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        //   CpuDao danone = new CpuDao(con);

//       RegistroDao r1 = new RegistroDao(con);
////
//        //System.out.println(r1.selectAllRegistros());
//        System.out.println(r1.selectAllRegistroRam());

        ComponenteDao c1 = new ComponenteDao(con);
        System.out.println(c1.selectAllComponente());


    }
}