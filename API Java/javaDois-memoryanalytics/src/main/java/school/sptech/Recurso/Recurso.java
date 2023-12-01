package school.sptech.Recurso;

import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;

import java.util.ArrayList;
import java.util.List;

public abstract class Recurso{
    private String nome;
    private String unidadeMedida;
    private Double valorRegistro;
    private List<JdbcTemplate> conexoes;

    public Recurso(String nome, String unidadeMedida, Double valorRegistro) {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.valorRegistro = valorRegistro;
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }
    public abstract Double capturarRegistro();

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    public Double getValorRegistro() {
        return valorRegistro;
    }

    public void setValorRegistro(Double valorRegistro) {
        this.valorRegistro = valorRegistro;
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }
}