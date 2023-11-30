package school.sptech.Recurso;

import com.github.britooo.looca.api.group.temperatura.Temperatura;
import school.sptech.BancoDados.Conexao;
import java.util.List;
public class RecursoTemperatura  extends Recurso{

    public RecursoTemperatura(String nome, String unidadeMedida, Double registro, List<Conexao> conexoes) {
        super(nome, unidadeMedida, registro, conexoes);
    }

    @Override
    public Object capturarRegistro() {
        Temperatura temperatura = new Temperatura();
        return temperatura.getTemperatura();
    }
}
