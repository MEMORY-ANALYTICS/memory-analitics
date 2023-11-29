package school.sptech;

import com.github.britooo.looca.api.group.temperatura.Temperatura;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.*;
import school.sptech.Servidores.Servidor;

import java.util.List;

public class Main {
    public static void main(String[] args) {


        ConexaoMySql mysql = new ConexaoMySql();
    JdbcTemplate con = mysql.criarConexao();
    List<Servidor> l1 = con.query("select * from servidor",new BeanPropertyRowMapper<>(Servidor.class));
   System.out.println(l1);



    }




}