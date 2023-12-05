package school.sptech.Componente;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Conexao.ConexaoMySql;
import school.sptech.Conexao.ConexaoSqlServer;
import school.sptech.Servidor.Servidor;

import java.util.ArrayList;
import java.util.List;

public class Componente {
    private int idComponente;
    private String fabricante;
    private String nomeModelo;
    private String tipoComponente;
    private Double limiteMin;
    private Double limiteMax;
    private List<JdbcTemplate> conexoes;

    public Componente(int idComponente, String fabricante, String nomeModelo, String tipoComponente, Double limiteMin, Double limiteMax) {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.idComponente = idComponente;
        this.fabricante = fabricante;
        this.nomeModelo = nomeModelo;
        this.tipoComponente = tipoComponente;
        this.limiteMin = limiteMin;
        this.limiteMax = limiteMax;
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }
    public Componente() {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }
    public int getIdComponente() {
        return idComponente;
    }

    public void setIdComponente(int idComponente) {
        this.idComponente = idComponente;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getNomeModelo() {
        return nomeModelo;
    }

    public void setNomeModelo(String nomeModelo) {
        this.nomeModelo = nomeModelo;
    }

    public String getTipoComponente() {
        return tipoComponente;
    }

    public void setTipoComponente(String tipoComponente) {
        this.tipoComponente = tipoComponente;
    }

    public Double getLimiteMin() {
        return limiteMin;
    }

    public void setLimiteMin(Double limiteMin) {
        this.limiteMin = limiteMin;
    }

    public Double getLimiteMax() {
        return limiteMax;
    }

    public void setLimiteMax(Double limiteMax) {
        this.limiteMax = limiteMax;
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }
}
