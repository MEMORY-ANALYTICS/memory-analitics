package school.sptech.Empresas;

import school.sptech.BancoDados.Database;

public class Endereco {
    private String cep;
    private String logradouro;
    private int numero;
    private String cidade;
    private String estado;
    private Database banco;
    private int fkEmpresa;

    public Endereco(String cep, String logradouro, int numero, String cidade, String estado,
                    Database banco, int fkEmpresa) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.banco = banco;
        this.fkEmpresa = fkEmpresa;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    public int getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(int fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
    }

    @Override
    public String toString() {
        return "Endereco{" +
                "cep='" + cep + '\'' +
                ", logradouro='" + logradouro + '\'' +
                ", numero=" + numero +
                ", cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                ", banco=" + banco +
                ", fkEmpresa=" + fkEmpresa +
                '}';
    }
}
