package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public class MySql extends Database{
    private String porta;

    public MySql(String setDriverClassName, String setUrl, String setUsername, String setPassword, String porta) {
        super(setDriverClassName, setUrl, setUsername, setPassword);
        this.porta = porta;
    }


    @Override
    protected List<Registro> selectBanco() {
        return null;
    }

    public String getPorta() {
        return porta;
    }

    public void setPorta(String porta) {
        this.porta = porta;
    }

    @Override
    public String toString() {
        return "MySql{" +
                "porta='" + porta + '\'' +
                '}';
    }
}
