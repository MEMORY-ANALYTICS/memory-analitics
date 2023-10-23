package school.sptech.Crud.Dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Registro;

import java.util.ArrayList;
import java.util.List;

public class RegistroDao {
    private JdbcTemplate con;
    private List<Recurso> recursos = new ArrayList<>();
    public RegistroDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Registro> selectAllRegistros(){
        return con.query("SELECT * FROM registro;",
        new BeanPropertyRowMapper<>(Registro.class));
    }

    public List<Registro> selectAllRegistrosCpu(){
        System.out.println("Registro de CPU");

        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'CPU'",
                new BeanPropertyRowMapper<>(Registro.class)
                );
    }
    public List<Registro> selectAllRegistroDisco(){
        System.out.println("Registro de DISCO");
        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'DISCO'",
                new BeanPropertyRowMapper<>(Registro.class)
        );
    }

    public List<Registro> selectAllRegistroRam(){
        System.out.println("Registro de RAM");
        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'RAM'",
                new BeanPropertyRowMapper<>(Registro.class)
        );
    }
}
