package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;

import java.util.List;

public class RecursoRede extends Recurso{

    public RecursoRede(String nome, String unidadeMedida, Double valorRegistro, List<Conexao> conexoes) {
        super(nome, unidadeMedida, valorRegistro, conexoes);
    }


}
