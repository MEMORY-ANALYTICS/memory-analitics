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

    public List<Cpu> listar() {
        return con.query(
                "SELECT * FROM registro",
                new BeanPropertyRowMapper<>(Cpu.class));
    }


}
