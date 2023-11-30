package school.sptech.BancoDados;

public class ConexaoMySqlServer extends Conexao  {
    public ConexaoMySqlServer(String driverClassName, String url, String username, String password) {
        super(driverClassName, url, username, password);
    }

    @Override
    public void registar() {

    }
}
