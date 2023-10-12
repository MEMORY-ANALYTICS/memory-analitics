package school.sptech;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        //Looca looca = new Looca();
        //System.out.println(looca.getSistema());

        //System.out.println(looca.getRede().getParametros());
        //System.out.println(looca.getRede().getGrupoDeInterfaces().getInterfaces());

        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();
//        con.update("INSERT INTO cargo VALUE (null, 'Cargo Teste')");

        Empresa empresa = new Empresa();
        EmpresaDao empresaDao = new EmpresaDao(con);

       List<Empresa> teste = empresaDao.selectIdEmpresa("joao123", "senha123");
       System.out.println(teste.get(0).getIdEmpresa());

      // ServidorDao servidorDao = new ServidorDao(con);
       //List<Servidor> testandoExibicao = servidorDao.listar();
        //System.out.println(testandoExibicao);

        Servidor servidorTeste = new Servidor("Teste","Teste","asd","123", "joao123", "login123");
        System.out.println(servidorTeste);
    }
}