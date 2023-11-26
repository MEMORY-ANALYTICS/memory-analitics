package school.sptech.Servidores;

import school.sptech.BancoDados.Database;

import java.time.LocalDateTime;

public class Downtime {
    private int tempoDowntime;
    private LocalDateTime dtHora;
    private Database banco;
    private int fkServidor;

    public Downtime(int tempoDowntime, LocalDateTime dtHora, Database banco, int fkServidor) {
        this.tempoDowntime = tempoDowntime;
        this.dtHora = dtHora;
        this.banco = banco;
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

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
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
                ", banco=" + banco +
                ", fkServidor=" + fkServidor +
                '}';
    }
}
