package school.sptech.Componentes;

import com.github.britooo.looca.api.group.temperatura.Temperatura;
import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.Database;

import java.util.List;

public class RecursoTemperatura  extends  Recurso{
    public RecursoTemperatura(String nome, String unidadeMedida, List<Registro> registros, Database banco, Conexao con, int fkComponente) {
        super(nome, unidadeMedida, registros, banco, con, fkComponente);
    }

    @Override
    public void capturarRegistro() {
        Temperatura temperatura = new Temperatura();
        System.out.println(temperatura.getTemperatura());
    }

}
