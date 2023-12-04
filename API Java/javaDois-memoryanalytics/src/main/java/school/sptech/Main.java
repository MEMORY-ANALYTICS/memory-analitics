package school.sptech;

import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoRede;

import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        TimerTask taskProcessos = new TimerTask() {
        RecursoProcessos recursoProcessos = new RecursoProcessos();
            @Override
            public void run() {
                recursoProcessos.capturarRegistro();
            }
        };
        Timer timerProcessos = new Timer();
        timerProcessos.schedule(taskProcessos, 0, 2000);

        //TimerTask taskRede = new TimerTask() {
          //RecursoRede recursoRede = new RecursoRede;
           // @Override
            //public void run() {
               // recursoRede.capturarRegistro();
           // }
       // };
        //Timer timerRede = new Timer();
        //timerRede.schedule(taskRede, 0, 1000);


    }
}