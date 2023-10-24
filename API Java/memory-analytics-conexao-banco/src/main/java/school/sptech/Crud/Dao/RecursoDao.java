package school.sptech.Crud.Dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Recurso;

import java.util.List;

public class RecursoDao {

    private JdbcTemplate con;

    public RecursoDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Recurso> selectAllRecursos(){
        return con.query("SELECT * FROM recurso",
        new BeanPropertyRowMapper<>(Recurso.class));
    }

    public List<Recurso> selectAllRecursosRegistros(){
        return con.query("SELECT tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001;",
                new BeanPropertyRowMapper<>(Recurso.class));
    }

    public List<Recurso> selectAllRecursosRegistrosCpu(){
        return con.query("SELECT tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'CPU';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    public List<Recurso> selectAllRecursosRegistrosDisco(){
        return con.query("SELECT tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'DISCO';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    public List<Recurso> selectAllRecursosRegistrosRam(){
        return con.query("SELECT tipoRecurso FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'RAM';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }

}
