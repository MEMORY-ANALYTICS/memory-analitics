package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processos.Processo;

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;

public class RecursoProcessos {
    Looca looca = new Looca();
    public Integer quantidadeProcessosOnline(){
        Integer qtdProcessos = 0;
        for(Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            qtdProcessos++;
        }
        return qtdProcessos;
    }

    public String getProcessoMaiorUsoCpu(){

        Double mediaAtualComparacao = .0;
        Processo processoAtualComparacao;
        List<Double> listaMediaProcessos = new ArrayList<>();
        List<Processo> listaOrdemProcessos = new ArrayList<>();
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            double mediaAtual = (processo.getUsoCpu() + processo.getUsoMemoria())/2;
            listaMediaProcessos.add(mediaAtual);
            listaOrdemProcessos.add(processo);
        }


        OptionalDouble maiorMediaDaLista = listaMediaProcessos.stream().mapToDouble(v -> v).max();
        Processo processoMaiorMedia = listaOrdemProcessos.get(listaMediaProcessos.indexOf(maiorMediaDaLista.getAsDouble()));
        return processoMaiorMedia.getNome();
    }

    public List<String> getAllNomesProcessos(){
        List<String> listaNomes = new ArrayList<>();
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            listaNomes.add(processo.getNome());
        }
        return listaNomes;
    }

    public Double getUsoCpuProcessos(){
        Double usoTotal = .0;
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            usoTotal += processo.getUsoCpu();
        }
        return usoTotal/quantidadeProcessosOnline();
    }

    public Double getUsoRamProcessos(){
        Double usoTotal = .0;
        for(Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            usoTotal += processo.getUsoMemoria();
        }
        return usoTotal;
    }

    public void listarTodosProcessos(){
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            System.out.println(processo);
        }
    }
}
