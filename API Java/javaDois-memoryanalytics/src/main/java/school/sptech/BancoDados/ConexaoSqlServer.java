package school.sptech.BancoDados;

import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ConexaoSqlServer extends Conexao  {
    private JdbcTemplate conexao;
    public ConexaoSqlServer(String driverClassName, String url, String username, String password) {
        super("", "35.172.0.77", "sa", "urubu100");
    }


    public JdbcTemplate criarConexao(){
        SQLServerDataSource dataSource = new SQLServerDataSource();
        dataSource.setURL(getUrl());
        dataSource.setUser(getUsername());
        dataSource.setPassword(getPassword());
        dataSource.setTrustServerCertificate(true);

        this.conexao = new JdbcTemplate(dataSource);
        return this.conexao;
    }


    @Override
    public void queryInsert() {
        
    }

    @Override
    public List<Object> querySelect() {
        return null;
    }

    @Override
    public List<Object> queryProcedureSelect() {
        return null;
    }

    @Override
    public void queryProcedureInsert() {

    }
}
