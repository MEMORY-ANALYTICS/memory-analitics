package school.sptech.BancoDados;

import school.sptech.Componentes.Registro;

import java.util.List;

public class MySql extends Database{
    private String porta;

    public MySql(String nomeBanco, String senhaBanco, String localhost, String porta) {
        super(nomeBanco, senhaBanco, localhost);
        this.porta = porta;
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
