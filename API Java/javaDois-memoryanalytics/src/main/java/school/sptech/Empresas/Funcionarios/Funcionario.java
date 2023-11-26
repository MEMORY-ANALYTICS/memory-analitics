package school.sptech.Empresas.Funcionarios;

import school.sptech.BancoDados.Database;

import java.util.List;

public class Funcionario {
    private String nomeFunc;
    private String emailFunc;
    private String telefoneFunc;
    private String permissao;
    private List<Funcionario> supervisor;
    private Database banco;

    public Funcionario(String nomeFunc, String emailFunc, String telefoneFunc, String permissao,
                       List<Funcionario> supervisor, Database banco) {
        this.nomeFunc = nomeFunc;
        this.emailFunc = emailFunc;
        this.telefoneFunc = telefoneFunc;
        this.permissao = permissao;
        this.supervisor = supervisor;
        this.banco = banco;
    }

    public String getNomeFunc() {
        return nomeFunc;
    }

    public void setNomeFunc(String nomeFunc) {
        this.nomeFunc = nomeFunc;
    }

    public String getEmailFunc() {
        return emailFunc;
    }

    public void setEmailFunc(String emailFunc) {
        this.emailFunc = emailFunc;
    }

    public String getTelefoneFunc() {
        return telefoneFunc;
    }

    public void setTelefoneFunc(String telefoneFunc) {
        this.telefoneFunc = telefoneFunc;
    }

    public String getPermissao() {
        return permissao;
    }

    public void setPermissao(String permissao) {
        this.permissao = permissao;
    }

    public List<Funcionario> getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(List<Funcionario> supervisor) {
        this.supervisor = supervisor;
    }

    public Database getBanco() {
        return banco;
    }

    public void setBanco(Database banco) {
        this.banco = banco;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nomeFunc='" + nomeFunc + '\'' +
                ", emailFunc='" + emailFunc + '\'' +
                ", telefoneFunc='" + telefoneFunc + '\'' +
                ", permissao='" + permissao + '\'' +
                ", supervisor=" + supervisor +
                ", banco=" + banco +
                '}';
    }
}
