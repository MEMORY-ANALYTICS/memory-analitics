package school.sptech.BancoDados;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConexaoMySql extends Conexao{

    private JdbcTemplate conexaoBanco;

    public ConexaoMySql() {
        super("com.mysql.cj.jdbc.Driver",
                "jdbc:mysql://localhost:3306/bd_memoryanalytics",
                "urubu100",
                "urubu100");
    }

    public JdbcTemplate criarConexao(){
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName(getDriverClassName());
        dataSource.setUrl(getUrl());
        dataSource.setUsername(getUsername());
        dataSource.setPassword(getPassword());
        this.conexaoBanco = new JdbcTemplate(dataSource);
        return this.conexaoBanco;
    }


    public JdbcTemplate getConexaoBanco() {
        return conexaoBanco;
    }

}
