package school.sptech;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;
import school.sptech.Recurso.RecursoDiscoUso;
import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoTemperatura;
import school.sptech.Servidores.Downtime;
import school.sptech.Servidores.Servidor;
import school.sptech.Servidores.ServidorRowMapper;
import school.sptech.Slack.Alertas;

import java.time.LocalDateTime;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
//        JdbcTemplate con = conexaoSqlServer.criarConexao();
//        List<Servidor> teste = con.query("SELECT * FROM servidor", new ServidorRowMapper());
//        System.out.println(teste);

//        RecursoProcessos recursoProcessos = new RecursoProcessos();
//    while (true){
//        System.out.println(
//            recursoProcessos.getUsoCpuProcessos()
//        );
//        System.out.println(recursoProcessos.getUsoRamProcessos());
//        System.out.println(recursoProcessos.getProcessoMaiorMediaUso());
//    }

        LocalDateTime dataHora = LocalDateTime.now();
        Downtime downtime = new Downtime(0, dataHora, 4);
        System.out.println(downtime.pegarId());

//        con.execute("USE bd_memoryanalytics;");
//        con.execute("INSERT INTO endereco (cep, logradouro, numero, cidade, estado, fkEmpresa) VALUES('09691200', 'Rua Cásper Branão', 662, 'São Bernardo do Campo', 'São Paulo', 10003);");
//        ConexaoMySql conexaoMySql = new ConexaoMySql();
//        JdbcTemplate con2 = conexaoMySql.criarConexao();
//        List<Servidor> teste2 = con2.query("SELECT * FROM servidor", new BeanPropertyRowMapper<>(Servidor.class));
//        System.out.println(teste2);
    }
}