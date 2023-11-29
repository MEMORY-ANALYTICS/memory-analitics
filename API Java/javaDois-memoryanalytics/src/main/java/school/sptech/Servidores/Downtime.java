package school.sptech.Servidores;

import school.sptech.BancoDados.Conexao;

import java.time.LocalDateTime;

public class Downtime {
    private int tempoDowntime;
    private LocalDateTime dtHora;
    private Conexao conexao;
    private int fkServidor;

    public Downtime(int tempoDowntime, LocalDateTime dtHora, Conexao conexao, int fkServidor) {
        this.tempoDowntime = tempoDowntime;
        this.dtHora = dtHora;
        this.conexao = conexao;
        this.fkServidor = fkServidor;
    }

    public int getTempoDowntime() {
        return tempoDowntime;
    }

    public void setTempoDowntime(int tempoDowntime) {
        this.tempoDowntime = tempoDowntime;
    }

    public LocalDateTime getDtHora() {
        return dtHora;
    }

    public void setDtHora(LocalDateTime dtHora) {
        this.dtHora = dtHora;
    }

    public Conexao getBanco() {
        return conexao;
    }

    public void setBanco(Conexao conexao) {
        this.conexao = conexao;
    }

    public int getFkServidor() {
        return fkServidor;
    }

    public void setFkServidor(int fkServidor) {
        this.fkServidor = fkServidor;
    }

    @Override
    public String toString() {
        return "Downtime{" +
                "tempoDowntime=" + tempoDowntime +
                ", dtHora=" + dtHora +
                ", conexao=" + conexao +
                ", fkServidor=" + fkServidor +
                '}';
    }
}
