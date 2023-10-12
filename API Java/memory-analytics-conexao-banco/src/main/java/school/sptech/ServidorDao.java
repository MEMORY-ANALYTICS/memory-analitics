package school.sptech;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ServidorDao {
    private JdbcTemplate con;
    private Empresa empresa;
    private Integer fkEmpresa;

    public ServidorDao(JdbcTemplate con) {
        this.con = con;
        this.fkEmpresa = this.empresa.getIdEmpresa();
    }

    public List<Servidor> listar(){
       return con.query("SELECT * FROM servidor WHERE fkEmpresa = ?",
               new BeanPropertyRowMapper<>(Servidor.class), this.fkEmpresa);
    }



}
