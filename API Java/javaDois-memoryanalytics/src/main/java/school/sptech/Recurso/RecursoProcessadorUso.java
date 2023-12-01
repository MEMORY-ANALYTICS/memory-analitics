package school.sptech.Recurso;

import com.github.britooo.looca.api.group.processador.Processador;

public class RecursoProcessadorUso extends Recurso {

    private final Processador processador;

    public RecursoProcessadorUso(Processador processador, String nome, String unidadeMedida) {
        super(nome, unidadeMedida, 0.0);
        this.processador = processador;
    }

    @Override
    public Double capturarRegistro() {
        double usoDoProcessador = processador.getUso();
        setValorRegistro(usoDoProcessador);
        return usoDoProcessador;
    }

    @Override
    public String toString() {
        return String.format("Nome: %s\nUnidade de Medida: %s\nValor do Registro: %.1f%%",
                getNome(), getUnidadeMedida(), getValorRegistro());
    }
}
