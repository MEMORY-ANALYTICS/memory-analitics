package school.sptech.Componentes;

import school.sptech.BancoDados.Conexao;
import school.sptech.Recurso.Recurso;

import java.util.List;

public class Rede extends Componente{
    public Rede(int idComponente, String fabricante, String nomeModelo, String tipoComponente, String limiteMin, String limiteMax, List<Recurso> recursos) {
        super(idComponente, fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, recursos);
    }

//    @Override
//    public Boolean checarCadastroExiste() {
//        return null;
//    }
//
//    @Override
//    public void cadastrarRecurso() {
//
//    }

}
