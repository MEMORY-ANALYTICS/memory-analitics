package school.sptech.Servidor;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ServidorRowMapper implements RowMapper<Servidor> {

    @Override
    public Servidor mapRow(ResultSet rs, int rowNum) throws SQLException {
        Servidor servidor = new Servidor();
        servidor.setIdServidor(rs.getInt("idServidor"));
        servidor.setSistemaOperacionalServidor(rs.getString("SistemaOperacionalServidor"));
        servidor.setApelidoServidor(rs.getString("apelidoServidor"));
        servidor.setLocalServidor(rs.getString("localServidor"));
        servidor.setMacAdress(rs.getString("macAdress"));
        servidor.setFkEmpresa(rs.getInt("fkEmpresa"));
        return  servidor;
    }
}
