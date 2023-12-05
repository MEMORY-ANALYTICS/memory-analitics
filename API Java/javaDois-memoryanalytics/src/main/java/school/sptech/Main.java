package school.sptech;

import school.sptech.Recurso.*;

import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        TimerTask timerTask = new TimerTask() {

            RecursoDiscoUso recursoDiscoUso = new RecursoDiscoUso();
            RecursoDiscoTamanhoTotal recursoDiscoTamanhoTotal = new RecursoDiscoTamanhoTotal();
            RecursoMemoriaUso recursoMemoriaUso = new RecursoMemoriaUso();
            RecursoProcessadorFrequencia recursoProcessadorFrequencia = new RecursoProcessadorFrequencia();
            RecursoProcessadorUso recursoProcessadorUso = new RecursoProcessadorUso();
            RecursoProcessos recursoProcessos = new RecursoProcessos();
            @Override
            public void run() {
                recursoDiscoTamanhoTotal.capturarRegistro();
                recursoDiscoUso.capturarRegistro();
                recursoMemoriaUso.capturarRegistro();
                recursoProcessadorFrequencia.capturarRegistro();
                recursoProcessadorUso.capturarRegistro();
                recursoProcessos.capturarRegistro();
            }
        };

        Timer timer = new Timer();
        timer.schedule(timerTask, 0, 1000);


    }
}