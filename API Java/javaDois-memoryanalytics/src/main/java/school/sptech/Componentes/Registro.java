package school.sptech.Componentes;

import school.sptech.BancoDados.Conexao;

public abstract class Registro {
    private Double valor;
    private Conexao conexao;
    private int fkRecurso;

    public Registro(Double valor, Conexao conexao, int fkRecurso) {
        this.valor = valor;
        this.conexao = conexao;
        this.fkRecurso = fkRecurso;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Conexao getBanco() {
        return conexao;
    }

    public void setBanco(Conexao conexao) {
        this.conexao = conexao;
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
                ", conexao=" + conexao +
                ", fkRecurso=" + fkRecurso +
                '}';
    }
}
