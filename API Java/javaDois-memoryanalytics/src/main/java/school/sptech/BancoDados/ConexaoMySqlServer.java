package school.sptech.BancoDados;

import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConexaoMySqlServer extends Conexao  {
    private JdbcTemplate conexao;
    public ConexaoMySqlServer(String driverClassName, String url, String username, String password) {
        super("", "35.172.0.77", "sa", "urubu100");
    }


    public void criarConexao(){
        SQLServerDataSource dataSource = new SQLServerDataSource();
        dataSource.setURL(getUrl());
        dataSource.setUser(getUsername());
        dataSource.setPassword(getPassword());
        dataSource.setTrustServerCertificate(true);

        this.conexao = new JdbcTemplate(dataSource);
    }






}
