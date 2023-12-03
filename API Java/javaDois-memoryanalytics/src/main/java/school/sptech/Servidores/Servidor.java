package school.sptech.Servidores;

import school.sptech.Servicos.BancoDados.Conexao;
import school.sptech.Componentes.Componente;

import java.util.ArrayList;
import java.util.List;

public class Servidor {
    private Integer idServidor;
    private String SistemaOperacionalServidor;
    private String apelidoServidor;
    private String localServidor;
    private String macAdress;
    private Integer fkEmpresa;
    private List<Chamado> chamados;
    private Downtime downtime;
    private List<Componente> componentes;
    private Conexao conexao;

    public Servidor(String sistemaOperacional, String apelido, String macAdress, String localServidor, List<Chamado> chamados,
                    Downtime downtime, Conexao conexao) {
        this.SistemaOperacionalServidor = sistemaOperacional;
        this.apelidoServidor = apelido;
        this.macAdress = macAdress;
        this.localServidor = localServidor;
        this.chamados = chamados;
        this.downtime = downtime;
        this.componentes =new ArrayList<>();
        this.conexao = conexao;
    }

    public Servidor() {
    }

    public void querySelectComponentes(){
        //Slect para pegar os componentes do servidor com fkServidor e inserir na lista componentes
    }
    public Integer getIdServidor() {
        return idServidor;
    }

    public void setIdServidor(Integer idServidor) {
        this.idServidor = idServidor;
    }

    public String getSistemaOperacionalServidor() {
        return SistemaOperacionalServidor;
    }

    public void setSistemaOperacionalServidor(String sistemaOperacionalServidor) {
        SistemaOperacionalServidor = sistemaOperacionalServidor;
    }

    public String getApelidoServidor() {
        return apelidoServidor;
    }

    public void setApelidoServidor(String apelidoServidor) {
        this.apelidoServidor = apelidoServidor;
    }

    public String getMacAdress() {
        return macAdress;
    }

    public void setMacAdress(String macAdress) {
        this.macAdress = macAdress;
    }

    public String getLocalServidor() {
        return localServidor;
    }

    public void setLocalServidor(String localServidor) {
        this.localServidor = localServidor;
    }

    public Integer getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(Integer fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
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

    public Conexao getConexao() {
        return conexao;
    }

    public void setConexao(Conexao conexao) {
        this.conexao = conexao;
    }

    @Override
    public String toString() {
        return "Servidor{" +
                "idServidor=" + idServidor +
                ", SistemaOperacionalServidor='" + SistemaOperacionalServidor + '\'' +
                ", apelidoServidor='" + apelidoServidor + '\'' +
                ", macAdress='" + macAdress + '\'' +
                ", localServidor='" + localServidor + '\'' +
                ", fkEmpresa=" + fkEmpresa +
                ", chamados=" + chamados +
                ", downtime=" + downtime +
                ", componentes=" + componentes +
                ", conexao=" + conexao +
                '}' + '\n' ;
    }
}
