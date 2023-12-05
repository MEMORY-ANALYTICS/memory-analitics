package school.sptech;

import school.sptech.Recurso.RecursoDiscoTamanhoTotal;
import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoRede;

import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        TimerTask timerTask = new TimerTask() {
            RecursoRede recursoRede = new RecursoRede();
            RecursoProcessos recursoProcessos = new RecursoProcessos();
            RecursoDiscoTamanhoTotal recursoDiscoTamanhoTotal = new RecursoDiscoTamanhoTotal();
            @Override
            public void run() {
                recursoDiscoTamanhoTotal.capturarRegistro();
                recursoProcessos.capturarRegistro();
                recursoRede.capturarRegistro();
            }
        };

        TimerTask timerTaskRede = new TimerTask() {
            @Override
            public void run() {
            }
        };

        Timer timer = new Timer();
        timer.schedule(timerTask, 0, 1000);


    }
}