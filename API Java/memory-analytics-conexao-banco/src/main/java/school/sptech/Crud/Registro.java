package school.sptech.Crud;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class Registro {

    private Integer idRegistro;
    private String valorRegistro;
    private LocalDateTime dtHoraRegistro;
    private Integer fkRecurso;
    private Integer fkMedidaComponente;
    private String tipoRecurso;


    public Registro() {
    }

    public Registro(String valorRegistro, LocalDateTime dtHoraRegistro, Integer fkRecurso, Integer fkMedidaComponente, String tipoRecurso) {
        this.valorRegistro = valorRegistro;
        this.dtHoraRegistro = dtHoraRegistro;
        this.fkRecurso = fkRecurso;
        this.fkMedidaComponente = fkMedidaComponente;
        this.tipoRecurso = tipoRecurso;
    }

    public Registro(Integer idRegistro, String valorRegistro, LocalDateTime dtHoraRegistro,
                    Integer fkRecurso, Integer fkMedidaComponente, String tipoRecurso) {
        this.idRegistro = idRegistro;
        this.valorRegistro = valorRegistro;
        this.dtHoraRegistro = dtHoraRegistro;
        this.fkRecurso = fkRecurso;
        this.fkMedidaComponente = fkMedidaComponente;
        this.tipoRecurso = tipoRecurso;
    }


    public String arrumarMedidaComponente(Integer medidaComponente){
        if (this.fkMedidaComponente == 1){
            return "GB";
        }else if(this.fkMedidaComponente == 2){
            return "MHz";
        }else if(this.fkMedidaComponente == 3){
            return "%";
        } else if (this.fkMedidaComponente == 4) {
            return "Mbps";
        }else{
            return "Inteiro";
        }
    }

    public Integer getIdRegistro() {
        return idRegistro;
    }

    public void setIdRegistro(Integer idRegistro) {
        this.idRegistro = idRegistro;
    }

    public String getValorRegistro() {
        return valorRegistro;
    }

    public void setValorRegistro(String valorRegistro) {
        this.valorRegistro = valorRegistro;
    }

    public LocalDateTime getDtHoraRegistro() {
        return dtHoraRegistro;
    }

    public void setDtHoraRegistro(LocalDateTime dtHoraRegistro) {
        this.dtHoraRegistro = dtHoraRegistro;
    }

    public Integer getFkRecurso() {
        return fkRecurso;
    }

    public void setFkRecurso(Integer fkRecurso) {
        this.fkRecurso = fkRecurso;
    }

    public Integer getFkMedidaComponente() {
        return fkMedidaComponente;
    }

    public void setFkMedidaComponente(Integer fkMedidaComponente) {
        this.fkMedidaComponente = fkMedidaComponente;
    }

    public String getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(String tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }


    @Override
    public String toString() {
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String dataFormatada = formatador.format(dtHoraRegistro);

        return """
                ---------
                REGISTRO de %s
                %s,%d%s
                \n""".formatted(tipoRecurso, dataFormatada ,valorRegistro , arrumarMedidaComponente(fkMedidaComponente));
    }

}
