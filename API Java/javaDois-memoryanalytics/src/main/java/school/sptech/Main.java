package school.sptech;

import school.sptech.Login.Login;
import school.sptech.Login.LoginDao;
import school.sptech.Recurso.*;
import school.sptech.Servidores.Downtime;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        LoginDao loginDao = new LoginDao();

        System.out.println("Digite o Login: ");
        loginDao.verificaLogin()
        LocalDateTime dateTime = LocalDateTime.now();


        Downtime downtime = new Downtime(0, dateTime, 0);
        downtime.calcDowntime();

        TimerTask timerTask = new TimerTask() {

            RecursoDiscoUso recursoDiscoUso = new RecursoDiscoUso();
            RecursoDiscoTamanhoTotal recursoDiscoTamanhoTotal = new RecursoDiscoTamanhoTotal();
            RecursoMemoriaUso recursoMemoriaUso = new RecursoMemoriaUso();
            RecursoProcessadorFrequencia recursoProcessadorFrequencia = new RecursoProcessadorFrequencia();
            RecursoProcessadorUso recursoProcessadorUso = new RecursoProcessadorUso();
            RecursoProcessos recursoProcessos = new RecursoProcessos();
            RecursoRede recursoRede =new RecursoRede();
            @Override
            public void run() {
                recursoDiscoTamanhoTotal.capturarRegistro();
                recursoDiscoUso.capturarRegistro();
                recursoMemoriaUso.capturarRegistro();
                recursoProcessadorFrequencia.capturarRegistro();
                recursoProcessadorUso.capturarRegistro();
                recursoProcessos.capturarRegistro();
//                recursoRede.capturarRegistro();
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