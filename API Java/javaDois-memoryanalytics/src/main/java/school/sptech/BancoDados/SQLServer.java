package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public class SQLServer extends Database{
    private String ip;

    public SQLServer(String setDriverClassName, String setUrl, String setUsername, String setPassword, String ip) {
        super(setDriverClassName, setUrl, setUsername, setPassword);
        this.ip = ip;
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
