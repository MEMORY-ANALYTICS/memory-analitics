package school.sptech.Empresas;

import school.sptech.BancoDados.Database;
import school.sptech.Servidores.Servidor;

import java.util.List;

public class Empresa {
    private String nome;
    private String cnpj;
    private String email;

    private List<Servidor> servidores;
    private Database banco;

    public Empresa(String nome, String cnpj, String email,
                   List<Servidor> servidores, Database banco) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
        this.servidores = servidores;
        this.banco = banco;
    }

    public void cadastrarServidor(Servidor servidor){

    }

    public void removerServidor(Servidor servidor){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Servidor> getServidores() {
        return servidores;
    }

    public void setServidores(List<Servidor> servidores) {
        this.servidores = servidores;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "nome='" + nome + '\'' +
                ", cnpj='" + cnpj + '\'' +
                ", email='" + email + '\'' +
                ", servidores=" + servidores +
                ", banco=" + banco +
                '}';
    }
}
