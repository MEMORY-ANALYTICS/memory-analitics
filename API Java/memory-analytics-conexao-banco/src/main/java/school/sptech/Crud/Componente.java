package school.sptech.Crud;

public class Componente {
    private Integer idComponente;
    private String fabricante;
    private String nomeModelo;
    private String tipoComponente;
    private String limiteMin;
    private String limiteMax;
    private Integer fkServidor;

    private String apelidoServidor;


    public Componente() {
    }

    public Componente(String fabricante, String nomeModelo, String tipoComponente, String limiteMin, String limiteMax, Integer fkServidor,String apelidoServidor) {
        this.fabricante = fabricante;
        this.nomeModelo = nomeModelo;
        this.tipoComponente = tipoComponente;
        this.limiteMin = limiteMin;
        this.limiteMax = limiteMax;
        this.fkServidor = fkServidor;
        this.apelidoServidor = apelidoServidor;
    }

    public Componente(Integer idComponente, String fabricante, String nomeModelo, String tipoComponente, String limiteMin, String limiteMax, Integer fkServidor,String apelidoServidor) {
        this.idComponente = idComponente;
        this.fabricante = fabricante;
        this.nomeModelo = nomeModelo;
        this.tipoComponente = tipoComponente;
        this.limiteMin = limiteMin;
        this.limiteMax = limiteMax;
        this.fkServidor = fkServidor;
        this.apelidoServidor = apelidoServidor;
    }

    public String getApelidoServidor() {
        return apelidoServidor;
    }

    public void setApelidoServidor(String apelidoServidor) {
        this.apelidoServidor = apelidoServidor;
    }

    public Integer getIdComponente() {
        return idComponente;
    }

    public void setIdComponente(Integer idComponente) {
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

    public Integer getFkServidor() {
        return fkServidor;
    }

    public void setFkServidor(Integer fkServidor) {
        this.fkServidor = fkServidor;
    }

    @Override
    public String toString() {
        return "\nComponente{" +
                "idComponente=" + idComponente +
                ", fabricante='" + fabricante + '\'' +
                ", nomeModelo='" + nomeModelo + '\'' +
                ", tipoComponente='" + tipoComponente + '\'' +
                ", limiteMin='" + limiteMin + '\'' +
                ", limiteMax='" + limiteMax + '\'' +
                ", fkServidor=" + fkServidor +
                ", apelidoServidor='" + apelidoServidor + '\'' +
                '}';
    }
}
