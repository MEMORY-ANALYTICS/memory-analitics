package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public abstract class Database {
    private String nomeBanco;
    private String senhaBanco;
    private String localhost;

    public Database(String nomeBanco, String senhaBanco, String localhost) {
        this.nomeBanco = nomeBanco;
        this.senhaBanco = senhaBanco;
        this.localhost = localhost;
    }

    protected abstract void insertBanco();
    protected abstract void updateBanco();
    protected abstract void deleteBanco();

    protected abstract List<Registro> selectBanco();

    public String getNomeBanco() {
        return nomeBanco;
    }

    public void setNomeBanco(String nomeBanco) {
        this.nomeBanco = nomeBanco;
    }

    public String getSenhaBanco() {
        return senhaBanco;
    }

    public void setSenhaBanco(String senhaBanco) {
        this.senhaBanco = senhaBanco;
    }

    public String getLocalhost() {
        return localhost;
    }

    public void setLocalhost(String localhost) {
        this.localhost = localhost;
    }

    @Override
    public String toString() {
        return "Database{" +
                "nomeBanco='" + nomeBanco + '\'' +
                ", senhaBanco='" + senhaBanco + '\'' +
                ", localhost='" + localhost + '\'' +
                '}';
    }
}
