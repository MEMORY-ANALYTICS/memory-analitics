package school.sptech.Crud;

public class Recurso {

    private Integer idRecurso;
    private String tipoRecurso;
    private Integer fkComponente;

    public Recurso() {
    }

    public Recurso(String tipoRecurso, Integer fkComponente) {
        this.tipoRecurso = tipoRecurso;
        this.fkComponente = fkComponente;
    }

    public Recurso(Integer idRecurso, String tipoRecurso, Integer fkComponente) {
        this.idRecurso = idRecurso;
        this.tipoRecurso = tipoRecurso;
        this.fkComponente = fkComponente;
    }

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(String tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public Integer getFkComponente() {
        return fkComponente;
    }

    public void setFkComponente(Integer fkComponente) {
        this.fkComponente = fkComponente;
    }

    @Override
    public String toString() {
        return "\nRecurso{" +
                "idRecurso=" + idRecurso +
                ", tipoRecurso='" + tipoRecurso + '\'' +
                ", fkComponente=" + fkComponente +
                '}';
    }
}
