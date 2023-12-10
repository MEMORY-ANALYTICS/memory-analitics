package school.sptech;

public class Empresa {
    private Integer idEmpresa;
    private String nomeEmpresa;
    private String cnpjEmpresa;
    private String emailEmpresa;
    private String telEmpresa;

    public Empresa(Integer idEmpresa, String nomeEmpresa, String cnpjEmpresa, String emailEmpresa, String telEmpresa) {
        this.idEmpresa = idEmpresa;
        this.nomeEmpresa = nomeEmpresa;
        this.cnpjEmpresa = cnpjEmpresa;
        this.emailEmpresa = emailEmpresa;
        this.telEmpresa = telEmpresa;
    }

    public Empresa(String nomeEmpresa, String cnpjEmpresa, String emailEmpresa, String telEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
        this.cnpjEmpresa = cnpjEmpresa;
        this.emailEmpresa = emailEmpresa;
        this.telEmpresa = telEmpresa;
    }

    public Empresa() {
    }

    public Integer getIdEmpresa() {
        return idEmpresa;
    }

    public void setIdEmpresa(Integer idEmpresa) {
        this.idEmpresa = idEmpresa;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getCnpjEmpresa() {
        return cnpjEmpresa;
    }

    public void setCnpjEmpresa(String cnpjEmpresa) {
        this.cnpjEmpresa = cnpjEmpresa;
    }

    public String getEmailEmpresa() {
        return emailEmpresa;
    }

    public void setEmailEmpresa(String emailEmpresa) {
        this.emailEmpresa = emailEmpresa;
    }

    public String getTelEmpresa() {
        return telEmpresa;
    }

    public void setTelEmpresa(String telEmpresa) {
        this.telEmpresa = telEmpresa;
    }
}
