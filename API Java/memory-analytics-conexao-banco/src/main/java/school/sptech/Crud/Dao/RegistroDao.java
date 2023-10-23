package school.sptech.Crud.Dao;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Registro;

import java.time.LocalDateTime;
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

    //-------------------------------------------------------------------------------------------------
    public void adicionarRegistroCpu(){
        Looca looca = new Looca();
        LocalDateTime DataHoraAgora = LocalDateTime.now();

       // con.query("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",);
    }
    public void adicionarRegistroDisco(){
        Looca looca = new Looca();
        //con.query("INSERT INTO registro VALUE (null, )");
    }
    public void adicionarRegistroRam(){
        Looca looca = new Looca();
        //.query("INSERT INTO registro VALUE (null, )");
    }
}
