package school.sptech.Empresas.Funcionarios;

import school.sptech.BancoDados.Database;

public class Cargo {
    private String nomeCargo;
    private Database banco;
    private int fkFuncionario;

    public Cargo(String nomeCargo, Database banco, int fkFuncionario) {
        this.nomeCargo = nomeCargo;
        this.banco = banco;
        this.fkFuncionario = fkFuncionario;
    }

    public String getNomeCargo() {
        return nomeCargo;
    }

    public void setNomeCargo(String nomeCargo) {
        this.nomeCargo = nomeCargo;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkFuncionario() {
        return fkFuncionario;
    }

    public void setFkFuncionario(int fkFuncionario) {
        this.fkFuncionario = fkFuncionario;
    }

    @Override
    public String toString() {
        return "Cargo{" +
                "nomeCargo='" + nomeCargo + '\'' +
                ", banco=" + banco +
                ", fkFuncionario=" + fkFuncionario +
                '}';
    }
}