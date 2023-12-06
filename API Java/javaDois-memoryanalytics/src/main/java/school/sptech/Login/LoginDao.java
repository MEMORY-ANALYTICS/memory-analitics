package school.sptech.Login;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;

import java.util.ArrayList;
import java.util.List;

public class LoginDao {

    private Login login = new Login();
    private List<JdbcTemplate> conexoes;

    public LoginDao() {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    public Boolean verificaLogin(String login, String senha){
        List<Login> listaLogins = getConexoes().get(0).query("SELECT * FROM login", new BeanPropertyRowMapper<>(Login.class));
        for(Login login1 : listaLogins){
            if(login1.getLogin().equals(login) && login1.getSenha().equals(senha)){
                getConexoes().get(0).query("SELECT idEmpresa from JOIN Funcionario on fkEmpresa = idEmpresa JOIN Login on idLogin = fkLogin" +
                        "where login = '%s' and senha = '%s'".formatted(login, senha), new BeanPropertyRowMapper<>(Empresa.class));
                return true;
            }
        }
        return false;
    }

    public Integer getFkEmpresa(){
        if(ve)
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }
}
