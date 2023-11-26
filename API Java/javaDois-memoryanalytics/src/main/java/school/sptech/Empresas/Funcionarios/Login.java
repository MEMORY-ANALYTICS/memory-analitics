package school.sptech.Empresas.Funcionarios;

import school.sptech.BancoDados.Database;

public class Login {
    private String email;
    private String senha;
    private Database banco;
    private int fkFuncionario;

    public Login(String email, String senha, Database banco, int fkFuncionario) {
        this.email = email;
        this.senha = senha;
        this.banco = banco;
        this.fkFuncionario = fkFuncionario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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
        return "Login{" +
                "email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", banco=" + banco +
                ", fkFuncionario=" + fkFuncionario +
                '}';
    }
}
