package school.sptech.Crud.Dao;

import com.github.britooo.looca.api.core.Looca;
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

    public List<Recurso> selectAllRecursosMemoryAnalytics(){
        return con.query("SELECT * FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN servidor ON fkServidor = idServidor where fkEmpresa = 1;",
                new BeanPropertyRowMapper<>(Recurso.class));
    }

    public List<Recurso> selectAllRecursosCpu(){
        return con.query("SELECT * FROM recurso JOIN componente on fkComponente = idComponente JOIN servidor ON fkServidor = idServidor where fkEmpresa = 1 AND tipoComponente LIKE  'CPU%';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    public List<Recurso> selectAllRecursosDisco(){
        return con.query("SELECT * FROM recurso JOIN componente on fkComponente = idComponente JOIN servidor ON fkServidor = idServidor where fkEmpresa = 1 AND tipoComponente LIKE 'DISCO%';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    public List<Recurso> selectAllRecursosRam(){
        return con.query("SELECT * FROM recurso JOIN componente on fkComponente = idComponente JOIN servidor ON fkServidor = idServidor where fkEmpresa = 1 AND tipoComponente LIKE 'RAM%';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    public List<Recurso> selectAllRecursosRede(){
        return con.query("SELECT * FROM recurso JOIN componente on fkComponente = idComponente JOIN servidor ON fkServidor = idServidor where fkEmpresa = 1 AND tipoComponente LIKE 'REDE%';",
                new BeanPropertyRowMapper<>(Recurso.class));
    }
    //-------------------------Insert Recurso -----------------------------
   public void adicionarRecursoCpu(Integer fkComponente){
       Looca looca = new Looca();
       con.update("INSERT INTO recurso (tipoRecurso, fkComponente) VALUES('CPU Total', ?)", fkComponente );
   }

    public void adicionarRecursoRam(String tipoRecurso, Integer fkComponente){
        Looca looca = new Looca();
        con.update("INSERT INTO recurso (tipoRecurso, fkComponente) VALUES(?, ?)", tipoRecurso, fkComponente);
    }

    public void adicionarRecursoDisco(String tipoRecurso, Integer fkComponente){
        Looca looca = new Looca();
        // fazer um for para pergar todas as partições no linux -> looca.getGrupoDeDiscos().getDiscos().get(i);
        // -> adicionar i no tipo recurso ex: Partição %d -> (i+1)
        con.update("INSERT INTO recurso (tipoRecurso, fkComponente) VALUES(?, ?)", tipoRecurso, fkComponente);
    }

    public void adicionarRecursoRede(String tipoRecurso, Integer fkComponente){
        Looca looca = new Looca();
        // fazer um for para pergar todas as interfaces de rede no linux -> looca.getGrupoDeDiscos().getDiscos().get(i);
        // -> adicionar "tipoRecurso i" no tipo recurso ex: Placa De Rede %d -> (i+1)
        con.update("INSERT INTO recurso (tipoRecurso, fkComponente) VALUES(?, ?)", tipoRecurso, fkComponente);
    }

}
