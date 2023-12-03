package school.sptech.BancoDados;

import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ConexaoSqlServer extends Conexao  {
    private JdbcTemplate conexao;
    public ConexaoSqlServer() {
        super("","jdbc:sqlserver://ec2-35-172-0-77.compute-1.amazonaws.com:1433", "sa", "urubu100");
    }


    public JdbcTemplate criarConexao(){
        SQLServerDataSource dataSource = new SQLServerDataSource();
        dataSource.setURL(getUrl());
        dataSource.setUser(getUsername());
        dataSource.setPassword(getPassword());
        dataSource.setPortNumber(1433);
        dataSource.setTrustServerCertificate(true);

        this.conexao = new JdbcTemplate(dataSource);
        return this.conexao;
    }
}
