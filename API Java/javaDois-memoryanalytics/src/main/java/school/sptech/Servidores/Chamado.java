package school.sptech.Servidores;

import school.sptech.Servicos.BancoDados.Conexao;

import java.time.LocalDateTime;

public class Chamado {
    private String codigo;
    private LocalDateTime dtHora;
    private Conexao conexao;
    private int fkServidor;

    public Chamado(String codigo, LocalDateTime dtHora, Conexao conexao, int fkServidor) {
        this.codigo = codigo;
        this.dtHora = dtHora;
        this.conexao = conexao;
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

    public Conexao getBanco() {
        return conexao;
    }

    public void setBanco(Conexao conexao) {
        this.conexao = conexao;
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
                ", conexao=" + conexao +
                ", fkServidor=" + fkServidor +
                '}';
    }
}
