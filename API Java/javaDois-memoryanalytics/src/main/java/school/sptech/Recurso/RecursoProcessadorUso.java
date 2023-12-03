package school.sptech.Recurso;

import com.github.britooo.looca.api.group.processador.Processador;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class RecursoProcessadorUso extends Recurso {

    private final Processador processador;

    public RecursoProcessadorUso(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, 0.0, null);//TODO TROCAR DE NULL
        this.processador = new Processador();
    }

    public RecursoProcessadorUso () {
        this("Processador", "% de Uso", 0.0);
        double usoDoProcessador = processador.getUso();
        setValorRegistro(usoDoProcessador);
    }

    @Override
    public Double capturarRegistro() {
        return getValorRegistro();
    }

    @Override
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public String toString() {
        return String.format("Nome: %s\nUnidade de Medida: %s\nValor do Registro: %.1f%%",
                getNome(), getUnidadeMedida(), getValorRegistro());
    }
}

