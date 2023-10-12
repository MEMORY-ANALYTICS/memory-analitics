package school.sptech;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class EmpresaDao {
    private JdbcTemplate con;

    public EmpresaDao(JdbcTemplate con) {
        this.con = con;

    }

    public List<Empresa> selectIdEmpresa(String login, String senha){
        return con.query("SELECT * FROM Empresa JOIN Funcionario ON idEmpresa = fkEmpresa " +
                "JOIN Login ON idFuncionario = fkFuncionario WHERE login = ? AND senha = ?;"
                ,new BeanPropertyRowMapper<>(Empresa.class), login, senha);
    }
}
