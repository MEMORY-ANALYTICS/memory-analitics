package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public abstract class Database {
    private String setDriverClassName;
    private String setUrl;
    private String setUsername;
    private String setPassword;

    public Database(String setDriverClassName, String setUrl, String setUsername, String setPassword) {
        this.setDriverClassName = setDriverClassName;
        this.setUrl = setUrl;
        this.setUsername = setUsername;
        this.setPassword = setPassword;
    }

    protected abstract List<Registro> selectBanco();

    public String getSetDriverClassName() {
        return setDriverClassName;
    }

    public void setSetDriverClassName(String setDriverClassName) {
        this.setDriverClassName = setDriverClassName;
    }

    public String getSetUrl() {
        return setUrl;
    }

    public void setSetUrl(String setUrl) {
        this.setUrl = setUrl;
    }

    public String getSetUsername() {
        return setUsername;
    }

    public void setSetUsername(String setUsername) {
        this.setUsername = setUsername;
    }

    public String getSetPassword() {
        return setPassword;
    }

    public void setSetPassword(String setPassword) {
        this.setPassword = setPassword;
    }
}
