package school.sptech;

import java.util.List;

public class Servidor {
    private Integer idServidor;
    private String sistemaOperacionalServidor;
    private String apelidoServidor;
    private String ipServidor;
    private String numeroSerieServidor;
    private EmpresaDao empresaDao;
    private List<Empresa> listaEmpresas;
    private Integer fkEmpresa;

    public Servidor(String login, String senha) {
        listaEmpresas = empresaDao.selectIdEmpresa(login, senha);
        this.fkEmpresa = listaEmpresas.get(0).getIdEmpresa();
    }

    public Servidor(String sistemaOperacionalServidor, String apelidoServidor,
                    String ipServidor, String numeroSerieServidor, String login, String senha) {
        this.sistemaOperacionalServidor = sistemaOperacionalServidor;
        this.apelidoServidor = apelidoServidor;
        this.ipServidor = ipServidor;
        this.numeroSerieServidor = numeroSerieServidor;
        listaEmpresas = empresaDao.selectIdEmpresa(login, senha);
        this.fkEmpresa = listaEmpresas.get(0).getIdEmpresa();
    }

    public Servidor(Integer idServidor, String sistemaOperacionalServidor, String apelidoServidor,
                    String ipServidor, String numeroSerieServidor, String login, String senha) {
        this.idServidor = idServidor;
        this.sistemaOperacionalServidor = sistemaOperacionalServidor;
        this.apelidoServidor = apelidoServidor;
        this.ipServidor = ipServidor;
        this.numeroSerieServidor = numeroSerieServidor;
        listaEmpresas = empresaDao.selectIdEmpresa(login, senha);
        this.fkEmpresa = listaEmpresas.get(0).getIdEmpresa();
    }

    public Integer getIdServidor() {
        return idServidor;
    }

    public void setIdServidor(Integer idServidor) {
        this.idServidor = idServidor;
    }

    public String getSistemaOperacionalServidor() {
        return sistemaOperacionalServidor;
    }

    public void setSistemaOperacionalServidor(String sistemaOperacionalServidor) {
        this.sistemaOperacionalServidor = sistemaOperacionalServidor;
    }

    public String getApelidoServidor() {
        return apelidoServidor;
    }

    public void setApelidoServidor(String apelidoServidor) {
        this.apelidoServidor = apelidoServidor;
    }

    public String getIpServidor() {
        return ipServidor;
    }

    public void setIpServidor(String ipServidor) {
        this.ipServidor = ipServidor;
    }

    public String getNumeroSerieServidor() {
        return numeroSerieServidor;
    }

    public void setNumeroSerieServidor(String numeroSerieServidor) {
        this.numeroSerieServidor = numeroSerieServidor;
    }

    public Integer getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(Integer fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
    }

    @Override
    public String toString() {
        return "\nServidor{" +
                "idServidor=" + idServidor +
                ", sistemaOperacionalServidor='" + sistemaOperacionalServidor + '\'' +
                ", apelidoServidor='" + apelidoServidor + '\'' +
                ", ipServidor='" + ipServidor + '\'' +
                ", numeroSerieServidor='" + numeroSerieServidor + '\'' +
                ", fkEmpresa=" + fkEmpresa +
                '}';
    }
}
