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
        // Select para pegar o servidor com macAdress
        // Adicionar os atributos no servidor

    }
}