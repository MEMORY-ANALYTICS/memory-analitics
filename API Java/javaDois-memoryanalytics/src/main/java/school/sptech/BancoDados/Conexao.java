package school.sptech.BancoDados;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class Conexao {

private JdbcTemplate conexaoBanco;
private Database database;

    public Conexao(Database database) {
        this.database = database;
    }

    public Conexao(){
    BasicDataSource dataSource = new BasicDataSource();
    dataSource.setDriverClassName(database.getSetDriverClassName());
    dataSource.setUrl(database.getSetUrl());
    dataSource.setUsername(dataSource.getUsername());
    dataSource.setPassword(dataSource.getPassword());

    this.conexaoBanco = new JdbcTemplate(dataSource);
}

    public JdbcTemplate getConexaoBanco() {
        return conexaoBanco;
    }

}
