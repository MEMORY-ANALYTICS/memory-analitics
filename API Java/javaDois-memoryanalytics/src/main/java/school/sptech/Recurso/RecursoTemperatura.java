package school.sptech.Recurso;

import com.github.britooo.looca.api.group.temperatura.Temperatura;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.Conexao;
import java.util.List;
public class RecursoTemperatura  extends Recurso{

    public RecursoTemperatura(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro, null); //TODO TROCAR DE NULL
    }

    @Override
    public Double capturarRegistro() {
        Temperatura temperatura = new Temperatura();
        return temperatura.getTemperatura();
    }
}
