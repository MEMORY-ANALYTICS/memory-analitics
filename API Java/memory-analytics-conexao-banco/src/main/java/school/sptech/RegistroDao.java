package school.sptech;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class RegistroDao {
    private Integer idRegistro;
    private Double valorRegistro;
    private LocalDateTime dtHoraRegistro;
    private Integer  fkMedidaComponente;

    public RegistroDao(Double valorRegistro, LocalDateTime dtHoraRegistro, Integer fkMedidaComponente) {
        this.valorRegistro = valorRegistro;
        this.dtHoraRegistro = dtHoraRegistro;
        this.fkMedidaComponente = fkMedidaComponente;
    }


}
