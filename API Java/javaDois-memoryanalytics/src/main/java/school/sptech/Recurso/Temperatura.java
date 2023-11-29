package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;
import school.sptech.Componentes.Registro;

import java.util.List;

public class Temperatura extends Recurso {
    public Temperatura(String nome, String unidadeMedida, List<Registro> registros, Conexao banco, int fkComponente) {
        super(nome, unidadeMedida, registros, banco, fkComponente);
    }

    @Override
    public void capturarRegistro() {
        com.github.britooo.looca.api.group.temperatura.Temperatura temperatura = new com.github.britooo.looca.api.group.temperatura.Temperatura();
    }

}
