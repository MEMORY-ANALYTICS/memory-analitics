package school.sptech.Componente;

import org.springframework.jdbc.core.RowMapper;
import school.sptech.Componente.Componente;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ComponenteRowMapper implements RowMapper<Componente> {
    @Override
    public Componente mapRow(ResultSet rs, int rowNum) throws SQLException {
        Componente componente = new Componente();
        componente.setIdComponente(rs.getInt("idComponente"));
        componente.setFabricante(rs.getString("fabricante"));
        componente.setNomeModelo(rs.getString("nomeModelo"));
        componente.setTipoComponente(rs.getString("tipoComponente"));
        componente.setLimiteMin(rs.getDouble("limiteMin"));
        componente.setLimiteMax(rs.getDouble("limiteMax"));
        return  componente;
    }
}

