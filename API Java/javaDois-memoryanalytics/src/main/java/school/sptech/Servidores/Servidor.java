package school.sptech.Servidores;

import school.sptech.BancoDados.Conexao;
import school.sptech.Componentes.Componente;

import java.util.List;

public class Servidor {
    private String sistemaOperacional;
    private String apelido;
    private String ip;
    private String numeroSerie;
    private List<Chamado> chamados;
    private Downtime downtime;
    private List<Componente> componentes;
    private Conexao conexao;

    public Servidor(String sistemaOperacional, String apelido, String ip, String numeroSerie, List<Chamado> chamados,
                    Downtime downtime, List<Componente> componentes, Conexao conexao) {
        this.sistemaOperacional = sistemaOperacional;
        this.apelido = apelido;
        this.ip = ip;
        this.numeroSerie = numeroSerie;
        this.chamados = chamados;
        this.downtime = downtime;
        this.componentes = componentes;
        this.conexao = conexao;
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


    public Conexao getBanco() {
        return conexao;
    }

    public void setBanco(Conexao conexao) {
        this.conexao = conexao;
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
                ", conexao=" + conexao +
                '}';
    }
}
