package school.sptech.Hardware.Dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Hardware.Cpu;

import java.util.List;

public class CpuDao {
    private JdbcTemplate con;

    public CpuDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Cpu> listarTodosOsValores() {
        return con.query(
                "SELECT * FROM registro JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente = idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 AND tipoComponente = 'CPU'",
                new BeanPropertyRowMapper<>(Cpu.class));
    }


}
