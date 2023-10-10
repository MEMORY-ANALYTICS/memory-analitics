package school.sptech;

import org.springframework.jdbc.core.JdbcTemplate;

public class ServidorDao {
    private JdbcTemplate con;

    public ServidorDao(JdbcTemplate con) {
        this.con = con;
    }

}
