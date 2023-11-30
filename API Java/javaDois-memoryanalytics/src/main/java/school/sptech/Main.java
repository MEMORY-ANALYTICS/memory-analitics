package school.sptech;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;
import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoTemperatura;
import school.sptech.Servidores.Servidor;
import school.sptech.Servidores.ServidorRowMapper;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        JdbcTemplate con = conexaoSqlServer.criarConexao();
        List<Servidor> teste = con.query("SELECT * FROM servidor", new ServidorRowMapper());
        System.out.println(teste);

        con.execute("USE bd_memoryanalytics;");
        con.execute("INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES('09691200', 'Rua Cásper Líbero', 662, 'São Bernardo do Campo', 'São Paulo', 10003);");
//        ConexaoMySql conexaoMySql = new ConexaoMySql();
//        JdbcTemplate con2 = conexaoMySql.criarConexao();
//        List<Servidor> teste2 = con2.query("SELECT * FROM servidor", new BeanPropertyRowMapper<>(Servidor.class));
//        System.out.println(teste2);
    }
}