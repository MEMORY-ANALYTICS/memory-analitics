package school.sptech;

import school.sptech.Componentes.Componente;
import school.sptech.Recurso.Recurso;
import school.sptech.Recurso.RecursoTemperatura;

import java.util.ArrayList;
import java.util.List;

public class MainTemperatura {
    public static void main(String[] args) {


        RecursoTemperatura recursoTemperatura = new RecursoTemperatura();

        List<Recurso> recursos = new ArrayList<>();

        recursos.add(recursoTemperatura);



        Componente componente = new Componente("fabricante","nomeModelo",
                "tipoComponente","10","20", ) {
        }
    }
}
