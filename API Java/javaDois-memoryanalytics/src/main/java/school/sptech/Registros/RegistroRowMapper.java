package school.sptech.Registros;

import org.springframework.jdbc.core.RowMapper;
import school.sptech.Servidores.Servidor;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RegistroRowMapper implements RowMapper<Registro>{

    @Override
    public Registro mapRow(ResultSet rs, int rowNum) throws SQLException {
        Registro registro = new Registro();
        registro.setIdRegistro(rs.getInt("idRegistro"));
        registro.setValorRegistro(rs.getDouble("valorRegistro"));
        registro.setTipoMedida(rs.getString("tipoMedida"));
        registro.setDetalheRegistro(rs.getString("detalheRegistro"));
        registro.setDtHoraRegistro(rs.getTimestamp("dtHoraRegistro").toLocalDateTime());
        registro.setFkComponente(rs.getInt("fkComponente"));
        return registro;
    }
}
