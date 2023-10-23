package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;

public class Informacoes {

    public void pegarInformacoes(){
        Looca looca = new Looca();
        System.out.println("Informações de PROCESSADOR:");
        System.out.println(looca.getProcessador());
        System.out.println("-".repeat(50));
        System.out.println("Informações de RAM:");
        System.out.println(looca.getMemoria());
        System.out.println("-".repeat(50));
        System.out.println("Informações de DISCO:");
        System.out.println(looca.getGrupoDeDiscos().getDiscos());
        System.out.println("-".repeat(50));
        System.out.println("Informações de REDE:");
        System.out.println(looca.getRede().getGrupoDeInterfaces().getInterfaces());
        System.out.println(looca.getRede().getParametros());
        System.out.println("-".repeat(50));
    }
}
