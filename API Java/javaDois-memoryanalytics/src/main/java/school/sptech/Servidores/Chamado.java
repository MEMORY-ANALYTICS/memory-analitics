package school.sptech.Servidores;

import school.sptech.BancoDados.Database;

import java.time.LocalDateTime;

public class Chamado {
    private String codigo;
    private LocalDateTime dtHora;
    private Database banco;
    private int fkServidor;

    public Chamado(String codigo, LocalDateTime dtHora, Database banco, int fkServidor) {
        this.codigo = codigo;
        this.dtHora = dtHora;
        this.banco = banco;
        this.fkServidor = fkServidor;
    }

    public void adicionarChamado(){

    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public LocalDateTime getDtHora() {
        return dtHora;
    }

    public void setDtHora(LocalDateTime dtHora) {
        this.dtHora = dtHora;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkServidor() {
        return fkServidor;
    }

    public void setFkServidor(int fkServidor) {
        this.fkServidor = fkServidor;
    }

    @Override
    public String toString() {
        return "Chamado{" +
                "codigo='" + codigo + '\'' +
                ", dtHora=" + dtHora +
                ", banco=" + banco +
                ", fkServidor=" + fkServidor +
                '}';
    }
}
