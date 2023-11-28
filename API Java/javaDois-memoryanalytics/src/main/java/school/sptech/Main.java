package school.sptech;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import school.sptech.BancoDados.*;
import school.sptech.Componentes.Registro;

import java.util.List;

public class Main {
    public static void main(String[] args) {

        Database bancoMySql = new MySql(
                "com.mysql.cj.jdbc.Driver",
                "jdbc:mysql://localhost:3306/bd_memoryanalytics",
                "urubu100","urubu100",
                "3306");

        Database bancoSqlServer = new SQLServer(
                "com.mysql.cj.jdbc.Driver",
                "jdbc:mysql://localhost:3306/bd_memoryanalytics",
                "urubu100","urubu100", "240024-2");

        Conexao conMysql = new Conexao(bancoMySql);

        Conexao conSqlServer = new Conexao(bancoSqlServer);

        Comando comandoSelectRegistro = new Comando("select * from registro");

        List<Object> registros = conMysql.getConexaoBanco().query
                (comandoSelectRegistro.getComando(), new BeanPropertyRowMapper<>());



    }




}