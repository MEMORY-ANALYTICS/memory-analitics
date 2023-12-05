package school.sptech;

import school.sptech.Registro.RegistrosRede;
import school.sptech.Servidor.Servidor;

import java.util.Timer;
import java.util.TimerTask;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        RegistrosRede rR = new RegistrosRede();
        System.out.println(rR.getFkServer());
        System.out.println(rR.getFkComponente());
        rR.InsertMbEnviados();
        rR.InsertMbRecebidos();
        rR.InsertMbpsTransmissao();
        rR.InsertLatencia();
        rR.InsertPacotesEnviados();
        rR.InsertPacotesRecebidos();

        TimerTask timerTask = new TimerTask() {

        RegistrosRede registrosRede = new RegistrosRede();
            @Override
            public void run() {
                registrosRede.capturarRegistros();
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