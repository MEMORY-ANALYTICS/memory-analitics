package school.sptech.Crud.Dao;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Componente;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Registro;
import school.sptech.Crud.Servidor;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class ComponenteDao {
    private JdbcTemplate con;

    public ComponenteDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Componente> selectAllComponente(){
        return con.query("SELECT idComponente, fabricante, nomeModelo,tipoComponente,limiteMin,limiteMax,fkServidor,apelidoServidor FROM componente JOIN servidor ON fkServidor = idServidor WHERE fkEmpresa = 1;",
                new BeanPropertyRowMapper<>(Componente.class));
    }

    public void adicionarCpu(String limiteMin, String limiteMax, Integer fkServidor){
        Looca looca = new Looca();
        con.update("INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) " +
                        "VALUES (?, ?, 'CPU', ?, ?, ?)",
                looca.getProcessador().getFabricante(), looca.getProcessador().getNome(), limiteMin, limiteMax, fkServidor);
    }

    public void adicionarRam(String fabricante, String nomeModelo, String limiteMin, String limiteMax, Integer fkServidor){
        Looca looca = new Looca();
        con.update("INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) " +
                        "VALUES (?, ?, 'RAM', ?, ?, ?)",
                fabricante, nomeModelo, limiteMin, limiteMax, fkServidor);
    }

    public void adicionarDisco(String limiteMin, String limiteMax, Integer fkServidor){
        Looca looca = new Looca();
        String[] lista = looca.getGrupoDeDiscos().getDiscos().get(0).getModelo().split(" ");
        con.update("INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) " +
                        "VALUES (?, ?, 'DISCO', ?, ?, ?)",
                lista[0],looca.getGrupoDeDiscos().getDiscos().get(0).getModelo(), limiteMin, limiteMax, fkServidor);
    }

    public void adicionarRede(String limiteMin, String limiteMax, Integer fkServidor){
        Looca looca = new Looca();
        String[] lista = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getNomeExibicao().split(" ");
        con.update("INSERT INTO componente (fabricante, nomeModelo, tipoComponente, limiteMin, limiteMax, fkServidor) " +
                        "VALUES (?, ?, 'REDE', ?, ?, ?)",
                lista[0], looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getNomeExibicao(), limiteMin, limiteMax, fkServidor);
    }
}
