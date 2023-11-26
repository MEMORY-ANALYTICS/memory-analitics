package school.sptech.Servidores;

import school.sptech.BancoDados.Database;
import school.sptech.Componentes.Componente;
import school.sptech.Empresas.Funcionarios.Funcionario;

import java.util.List;

public class Servidor {
    private String sistemaOperacional;
    private String apelido;
    private String ip;
    private String numeroSerie;
    private List<Chamado> chamados;
    private Downtime downtime;
    private List<Componente> componentes;
    private List<Funcionario> responsaveis;
    private Database banco;
    private int fkEmpresa;

    public Servidor(String sistemaOperacional, String apelido, String ip, String numeroSerie, List<Chamado> chamados,
                    Downtime downtime, List<Componente> componentes, List<Funcionario> responsaveis, Database banco, int fkEmpresa) {
        this.sistemaOperacional = sistemaOperacional;
        this.apelido = apelido;
        this.ip = ip;
        this.numeroSerie = numeroSerie;
        this.chamados = chamados;
        this.downtime = downtime;
        this.componentes = componentes;
        this.responsaveis = responsaveis;
        this.banco = banco;
        this.fkEmpresa = fkEmpresa;
    }

    public String getSistemaOperacional() {
        return sistemaOperacional;
    }

    public void setSistemaOperacional(String sistemaOperacional) {
        this.sistemaOperacional = sistemaOperacional;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public List<Chamado> getChamados() {
        return chamados;
    }

    public void setChamados(List<Chamado> chamados) {
        this.chamados = chamados;
    }

    public Downtime getDowntime() {
        return downtime;
    }

    public void setDowntime(Downtime downtime) {
        this.downtime = downtime;
    }

    public List<Componente> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<Componente> componentes) {
        this.componentes = componentes;
    }

    public List<Funcionario> getResponsaveis() {
        return responsaveis;
    }

    public void setResponsaveis(List<Funcionario> responsaveis) {
        this.responsaveis = responsaveis;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(int fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
    }

    @Override
    public String toString() {
        return "Servidor{" +
                "sistemaOperacional='" + sistemaOperacional + '\'' +
                ", apelido='" + apelido + '\'' +
                ", ip='" + ip + '\'' +
                ", numeroSerie='" + numeroSerie + '\'' +
                ", chamados=" + chamados +
                ", downtime=" + downtime +
                ", componentes=" + componentes +
                ", responsaveis=" + responsaveis +
                ", banco=" + banco +
                ", fkEmpresa=" + fkEmpresa +
                '}';
    }
}
