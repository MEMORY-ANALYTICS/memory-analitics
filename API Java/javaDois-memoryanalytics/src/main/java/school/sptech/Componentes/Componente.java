package school.sptech.Componentes;

import school.sptech.BancoDados.Conexao;
import school.sptech.Recurso.Recurso;

import java.util.List;

public abstract class Componente {
    private String fabricante;
    private String nomeModelo;
    private String tipoComponente;
    private String limiteMin;
    private String limiteMax;
    private List<Recurso> recursos;
    private Conexao conexao;

    public Componente(String fabricante, String nomeModelo, String tipoComponente,
                      String limiteMin, String limiteMax, List<Recurso> recursos, Conexao conexao) {
        this.fabricante = fabricante;
        this.nomeModelo = nomeModelo;
        this.tipoComponente = tipoComponente;
        this.limiteMin = limiteMin;
        this.limiteMax = limiteMax;
        this.recursos = recursos;
        this.conexao = conexao;
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

    public Conexao getBanco() {
        return conexao;
    }

    public void setBanco(Conexao conexao) {
        this.conexao = conexao;
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
                ", conexao=" + conexao +
                '}';
    }
}
