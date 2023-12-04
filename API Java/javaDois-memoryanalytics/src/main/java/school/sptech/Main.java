package school.sptech;

import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoRede;

import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        LocalDateTime dataHora = LocalDateTime.now();
        school.sptech.Servidores.Downtime downtime = new school.sptech.Servidores.Downtime(0, dataHora, 4);
        downtime.calcDowntime();


    }
}