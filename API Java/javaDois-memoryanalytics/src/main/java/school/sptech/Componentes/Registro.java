package school.sptech.Componentes;

import school.sptech.BancoDados.Database;

public abstract class Registro {
    private Double valor;
    private Database banco;
    private int fkRecurso;

    public Registro(Double valor, Database banco, int fkRecurso) {
        this.valor = valor;
        this.banco = banco;
        this.fkRecurso = fkRecurso;
    }

    public abstract Double capturarDados();

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkRecurso() {
        return fkRecurso;
    }

    public void setFkRecurso(int fkRecurso) {
        this.fkRecurso = fkRecurso;
    }

    @Override
    public String toString() {
        return "Registro{" +
                "valor=" + valor +
                ", banco=" + banco +
                ", fkRecurso=" + fkRecurso +
                '}';
    }
}
