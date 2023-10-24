package school.sptech.Crud.Dao;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Registro;
import school.sptech.Crud.Servidor;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ServidorDao {
    private JdbcTemplate con;

    public ServidorDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Servidor> selectAllServidor(){
        return con.query("SELECT * FROM servidor WHERE fkEmpresa = 1",
                new BeanPropertyRowMapper<>(Servidor.class));
    }

    public ServidorDao() {
    }

    public Boolean existeServidor(String ipServidor){
        List<Servidor> listaServidores = selectAllServidor();
        Boolean existe = false;
        for(Servidor servidor : listaServidores) {
            if (servidor.getIpServidor().equals(ipServidor)) {
                System.out.println("Esse servidor já está cadastrado");
                existe = true;
            }
        }
        return existe;
    }

    public void adicionarServidor(String apelidoServidor, String numeroSerieServidor){
        Looca looca = new Looca();
        String ipServidor = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoIpv4().get(0);
        con.update("INSERT INTO servidor(SistemaOperacionalServidor, apelidoServidor,ipServidor,numeroSerieServidor,fkEmpresa) VALUES (?, ?, ?, ?, ?)",
                looca.getSistema().getSistemaOperacional(), apelidoServidor, ipServidor, numeroSerieServidor, 1);
    }

}
