package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processos.Processo;

import java.util.ArrayList;
import java.util.List;

public class Processos {


    public void listarTodosProcessos() {
        Looca looca = new Looca();
        System.out.println(looca.getGrupoDeProcessos().getProcessos());
    }

    public Integer listarTotalProcessos(){
        Looca looca = new Looca();
        return looca.getGrupoDeProcessos().getTotalProcessos();
    }

    public void listarGastos(int index){
        Looca looca = new Looca();
        int qtd = 0;
        for (int i = 0; i < looca.getGrupoDeProcessos().getTotalProcessos(); i++) {
            if(looca.getGrupoDeProcessos().getProcessos().get(i).getUsoMemoria() >= index){
                qtd++;
                System.out.println(looca.getGrupoDeProcessos().getProcessos().get(i));
            }
        }
        if(qtd == 0){
            System.out.println("Não possui processos com uso de memória acima de: " + index);
        }
    }

}