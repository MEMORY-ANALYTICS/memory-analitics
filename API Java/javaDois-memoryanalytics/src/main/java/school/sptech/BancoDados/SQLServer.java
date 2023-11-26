package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public class SQLServer extends Database{
    private String ip;

    public SQLServer(String nomeBanco, String senhaBanco, String localhost, String ip) {
        super(nomeBanco, senhaBanco, localhost);
        this.ip = ip;
    }

    @Override
    protected void insertBanco() {

    }

    @Override
    protected void updateBanco() {

    }

    @Override
    protected void deleteBanco() {

    }

    @Override
    protected List<Registro> selectBanco() {
        return null;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    @Override
    public String toString() {
        return "SQLServer{" +
                "ip='" + ip + '\'' +
                '}';
    }
}
