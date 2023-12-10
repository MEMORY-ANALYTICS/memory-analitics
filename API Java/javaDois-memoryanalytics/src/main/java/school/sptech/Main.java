package school.sptech;

import school.sptech.Componentes.Componente;
import school.sptech.Login.Login;
import school.sptech.Login.LoginDao;
import school.sptech.Recurso.*;
import school.sptech.Servicos.Data;
import school.sptech.Servidores.Downtime;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {

        LoginDao loginDao = new LoginDao();
        Boolean isLogado = loginDao.verificaLogin();
        Boolean isCadastrado = loginDao.verificaCadastroServidor();

        if(isLogado){
            if (!isCadastrado){
                loginDao.cadastrarServidor();
                System.out.println("Servidor Cadastrado com sucesso!");
            }else{
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
                    RecursoRede recursoRede = new RecursoRede();

                    Componente componente = new Componente();
                    RecursoTemperatura recursoTemperatura = new RecursoTemperatura(componente);
                    @Override
                    public void run() {

                        LocalDateTime dtHoraRegistro = LocalDateTime.now();
                        String DtHoraRegistroSQL = Data.formatarParaSQLServer(dtHoraRegistro);
                        String DtHoraRegistroMySQL = Data.formatarParaMySQL(dtHoraRegistro);


                        recursoDiscoTamanhoTotal.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoDiscoUso.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoMemoriaUso.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoProcessadorFrequencia.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoProcessadorUso.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoProcessos.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);
                        recursoRede.capturarRegistro(DtHoraRegistroSQL,DtHoraRegistroMySQL);

                    }
                };

                Timer timer = new Timer();
                timer.schedule(timerTask, 0, 1000);
            }
        }
    }
}