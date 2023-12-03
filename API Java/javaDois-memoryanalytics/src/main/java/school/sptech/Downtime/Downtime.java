package school.sptech.Downtime;

import java.time.LocalDateTime;

public class Downtime {

    private Integer tempoDowntime;
    private LocalDateTime dtHoraDowntime;
    private Integer fkServidor;

    public Downtime(Integer tempoDowntime, LocalDateTime dtHoraDowntime, Integer fkServidor) {
        this.tempoDowntime = tempoDowntime;
        this.dtHoraDowntime = dtHoraDowntime;
        this.fkServidor = fkServidor;
    }

    public Integer calcDowntime(LocalDateTime dataHoraBanco) {
        return null;
    }
}
