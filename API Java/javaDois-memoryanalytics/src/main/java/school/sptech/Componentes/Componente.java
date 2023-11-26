package school.sptech.Componentes;

import school.sptech.BancoDados.Database;

import java.util.List;

public abstract class Componente {
    private String fabricante;
    private String nomeModelo;
    private String tipoComponente;
    private String limiteMin;
    private String limiteMax;
    private List<Recurso> recursos;
    private Database banco;

    public Componente(String fabricante, String nomeModelo, String tipoComponente,
                      String limiteMin, String limiteMax, List<Recurso> recursos, Database banco) {
        this.fabricante = fabricante;
        this.nomeModelo = nomeModelo;
        this.tipoComponente = tipoComponente;
        this.limiteMin = limiteMin;
        this.limiteMax = limiteMax;
        this.recursos = recursos;
        this.banco = banco;
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

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
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
                ", banco=" + banco +
                '}';
    }
}
