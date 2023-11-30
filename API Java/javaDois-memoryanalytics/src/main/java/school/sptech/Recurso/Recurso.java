package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.Registravel;
import school.sptech.Registro.Registro;

import java.util.List;
import java.util.OptionalDouble;

public abstract class Recurso implements Registravel {
    private String nome;
    private String unidadeMedida;
    private OptionalDouble registro;
    private List<Conexao> conexoes;

    public Recurso(String nome, String unidadeMedida, OptionalDouble registro,
                   List<Conexao> conexoes) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.registro = registro;
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

    public OptionalDouble getRegistro() {
        return registro;
    }

    public void setRegistro(OptionalDouble registro) {
        this.registro = registro;
    }

    public List<Conexao> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<Conexao> conexoes) {
        this.conexoes = conexoes;
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
