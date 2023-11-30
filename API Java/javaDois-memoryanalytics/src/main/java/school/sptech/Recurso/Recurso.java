package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.Registravel;
import school.sptech.Registro.Registro;

import java.util.List;

public abstract class Recurso implements Registravel {
    private String nome;
    private String unidadeMedida;
    private List<Registro> registros;
    private List<Conexao> conexoes;

    public Recurso(String nome, String unidadeMedida, List<Registro> registros,
                   List<Conexao> conexoes) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.registros = registros;
        this.conexoes  = conexoes;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    public List<Registro> getRegistros() {
        return registros;
    }

    public void setRegistros(List<Registro> registros) {
        this.registros = registros;
    }

    @Override
    public String toString() {
        return "Recurso{" +
                "nome='" + nome + '\'' +
                ", unidadeMedida='" + unidadeMedida + '\'' +
                ", registros=" + registros +
                ", conexões=" + conexoes +
                '}';
    }
}
