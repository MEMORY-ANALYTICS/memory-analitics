package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;

import java.util.List;

public abstract class Recurso{
    private String nome;
    private String unidadeMedida;
    private Double registro;
    private List<Conexao> conexoes;

    public Recurso(String nome, String unidadeMedida, Double registro, List<Conexao> conexoes) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.registro = registro;
        this.conexoes = conexoes;
    }

    public abstract Object capturarRegistro();

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

    public Double getRegistro() {
        return registro;
    }

    public void setRegistro(Double registro) {
        this.registro = registro;
    }

    public List<Conexao> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<Conexao> conexoes) {
        this.conexoes = conexoes;
    }


}