package school.sptech.Componentes;

import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.Database;

import java.util.List;

public abstract class Recurso {
    private String nome;
    private String unidadeMedida;
    private List<Registro> registros;
    private Database banco;
    private Conexao con;
    private int fkComponente;

    public Recurso(String nome, String unidadeMedida, List<Registro> registros, Database banco, Conexao con, int fkComponente) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.registros = registros;
        this.banco = banco;
        this.con = con;
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

    public Conexao getCon() {
        return con;
    }

    public void setCon(Conexao con) {
        this.con = con;
    }

    public abstract void capturarRegistro();

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
