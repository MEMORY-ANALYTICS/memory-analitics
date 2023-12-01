package school.sptech.Componentes;

import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;
import school.sptech.Recurso.Recurso;

import java.util.ArrayList;
import java.util.List;

public class Componente {
    private int idComponente;
    private String fabricante;
    private String nomeModelo;
    private String tipoComponente;
    private String limiteMin;
    private String limiteMax;
    private List<Recurso> recursos;
    private List<JdbcTemplate> conexoes;

    public Componente(int idComponente, String fabricante, String nomeModelo, String tipoComponente, String limiteMin, String limiteMax,
                      List<Recurso> recursos) {
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
        this.recursos = recursos;
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

    public String getLimiteMin() {
        return limiteMin;
    }

    public void setLimiteMin(String limiteMin) {
        this.limiteMin = limiteMin;
    }

    public String getLimiteMax() {
        return limiteMax;
    }

    public void setLimiteMax(String limiteMax) {
        this.limiteMax = limiteMax;
    }

    public List<Recurso> getRecursos() {
        return recursos;
    }

    public void setRecursos(List<Recurso> recursos) {
        this.recursos = recursos;
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }


    @Override
    public String toString() {
        return "Componente{" +
                "fabricante='" + fabricante + '\'' +
                ", nomeModelo='" + nomeModelo + '\'' +
                ", tipoComponente='" + tipoComponente + '\'' +
                ", limiteMin='" + limiteMin + '\'' +
                ", limiteMax='" + limiteMax + '\'' +
                ", recursos=" + recursos +
                ", conexoes=" + conexoes +
                '}';
    }
}
