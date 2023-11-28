package school.sptech.Componentes;

import com.github.britooo.looca.api.group.temperatura.Temperatura;
import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.Database;

import java.util.List;

public class RegistroTemperatura extends Registro {
    private  Temperatura temperatura;

    public RegistroTemperatura(Double valor, Database banco, int fkRecurso) {
        super(valor, banco, fkRecurso);
        this.temperatura = new Temperatura();
    }

    @Override
    public Double capturarDados() {
        return temperatura.getTemperatura();
    }

    public Temperatura getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(Temperatura temperatura) {
        this.temperatura = temperatura;
    }
}
