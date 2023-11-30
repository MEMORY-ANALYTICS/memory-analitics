package school.sptech.Recurso;

import school.sptech.BancoDados.Conexao;

import java.util.List;

public abstract class Recurso{
    private String nome;
    private String unidadeMedida;
    private Double valorRegistro;
    private List<Conexao> conexoes;

    public Recurso(String nome, String unidadeMedida, Double valorRegistro, List<Conexao> conexoes) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.valorRegistro = valorRegistro;
        this.conexoes = conexoes;
    }

    public abstract Double capturarRegistro();

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

    public Double getValorRegistro() {
        return valorRegistro;
    }

    public void setValorRegistro(Double valorRegistro) {
        this.valorRegistro = valorRegistro;
    }

    public List<Conexao> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<Conexao> conexoes) {
        this.conexoes = conexoes;
    }
}