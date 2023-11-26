package school.sptech.Componentes;

import school.sptech.BancoDados.Database;

import java.util.List;

public abstract class Recurso {
    private String nome;
    private String unidadeMedida;
    private List<Registro> registros;
    private Database banco;
    private int fkComponente;

    public Recurso(String nome, String unidadeMedida, List<Registro> registros, Database banco, int fkComponente) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.registros = registros;
        this.banco = banco;
        this.fkComponente = fkComponente;
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

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkComponente() {
        return fkComponente;
    }

    public void setFkComponente(int fkComponente) {
        this.fkComponente = fkComponente;
    }

    @Override
    public String toString() {
        return "Recurso{" +
                "nome='" + nome + '\'' +
                ", unidadeMedida='" + unidadeMedida + '\'' +
                ", registros=" + registros +
                ", banco=" + banco +
                ", fkComponente=" + fkComponente +
                '}';
    }
}
