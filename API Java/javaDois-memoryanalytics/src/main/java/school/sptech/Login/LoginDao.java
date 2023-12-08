package school.sptech.Login;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Empresa;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;
import school.sptech.Servidores.Servidor;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LoginDao {

    private Looca looca = new Looca();
    private String login = "";
    private String senha = "";
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

    public Boolean verificaLogin() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite login:");
        String login1 = scanner.nextLine();

        System.out.println("Digite senha:");
        String senha1 = scanner.nextLine();

        if (login1 != null && !login1.isEmpty() && senha1 != null && !senha1.isEmpty()) {
            List<Login> listaLogins = getConexoes().get(0).query("SELECT * FROM login", new BeanPropertyRowMapper<>(Login.class));
            for (Login login2 : listaLogins) {
                if (login2.getEmail().equals(login1) && login2.getSenha().equals(senha1)) {
                    setLogin(login1);
                    setSenha(senha1);
                    return true;
                }
            }
        }
        return false;
    }

    public Integer getFkEmpresa() {
        if (verificaLogin()) {
            List<Empresa> teste = getConexoes().get(0).query(
                    "SELECT idEmpresa from empresa JOIN Funcionario on fkEmpresa = idEmpresa JOIN login on idFuncionario = fkFuncionario where email = '%s' and senha = '%s';"
                            .formatted(getLogin(), getSenha()), new BeanPropertyRowMapper<>(Empresa.class));
            return teste.get(0).getIdEmpresa();
        }
        return 0;
    }

    public void cadastrarServidor(String apelidoServidor, String localServidor) {
        getConexoes().get(0).execute("INSERT INTO servidor VALUES ('%s','%s','%s','%s',%d);".formatted(
                looca.getSistema().getSistemaOperacional(),
                apelidoServidor,
                localServidor,
                looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac(),
                getFkEmpresa()));

        getConexoes().get(1).execute("INSERT INTO servidor VALUES ('%s','%s','%s','%s',%d);".formatted(
                looca.getSistema().getSistemaOperacional(),
                apelidoServidor,
                localServidor,
                looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac(),
                getFkEmpresa()));
    }

    public Boolean verificaCadastroServidor(){
        String macAddress = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();

        List<Servidor> listaServidores = getConexoes().get(0).query("""
                SELECT * FROM servidor WHERE macAdress = '%s';
                """.formatted(macAddress), new BeanPropertyRowMapper<>(Servidor.class));
        if(listaServidores.isEmpty()){
            return false;
        }else {
            return true;
        }
    }

    public void cadastrarServidor(){
        Scanner scannerTxt = new Scanner(System.in);
        if(!verificaCadastroServidor()){
            System.out.println("SERVIDOR NÃO CADASTRADO!!!!!!!!!");
            System.out.println("Insira o apelido do Servidor: ");
            String apelidoServidor = scannerTxt.nextLine();
            System.out.println("Insira o local do Servidor: ");
            String localServidor = scannerTxt.nextLine();
            cadastrarServidor(apelidoServidor,localServidor);
        }
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
