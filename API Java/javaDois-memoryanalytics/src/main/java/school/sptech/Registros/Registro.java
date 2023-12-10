package school.sptech.Registros;

import school.sptech.Servicos.BancoDados.Conexao;

import java.time.LocalDateTime;

public class Registro {

    private Integer idRegistro;
    private Double valorRegistro;
    private String tipoMedida;
    private String detalheRegistro;
    private LocalDateTime dtHoraRegistro;
    private Integer fkComponente;
    private Conexao conexao;

    public Registro(Double valorRegistro, String tipoMedida, String detalheRegistro, LocalDateTime dtHoraRegistro, Conexao conexao) {
        this.valorRegistro = valorRegistro;
        this.tipoMedida = tipoMedida;
        this.detalheRegistro = detalheRegistro;
        this.dtHoraRegistro = dtHoraRegistro;
        this.conexao = conexao;
    }

    public Registro() {
    }

    public Integer getIdRegistro() {
        return idRegistro;
    }

    public void setIdRegistro(Integer idRegistro) {
        this.idRegistro = idRegistro;
    }

    public Double getValorRegistro() {
        return valorRegistro;
    }

    public void setValorRegistro(Double valorRegistro) {
        this.valorRegistro = valorRegistro;
    }

    public String getTipoMedida() {
        return tipoMedida;
    }

    public void setTipoMedida(String tipoMedida) {
        this.tipoMedida = tipoMedida;
    }

    public String getDetalheRegistro() {
        return detalheRegistro;
    }

    public void setDetalheRegistro(String detalheRegistro) {
        this.detalheRegistro = detalheRegistro;
    }

    public LocalDateTime getDtHoraRegistro() {
        return dtHoraRegistro;
    }

    public void setDtHoraRegistro(LocalDateTime dtHoraRegistro) {
        this.dtHoraRegistro = dtHoraRegistro;
    }

    public Integer getFkComponente() {
        return fkComponente;
    }

    public void setFkComponente(Integer fkComponente) {
        this.fkComponente = fkComponente;
    }

    public Conexao getConexao() {
        return conexao;
    }

    public void setConexao(Conexao conexao) {
        this.conexao = conexao;
    }

    @Override
    public String toString() {
        return "Registro{" +
                "idRegistro=" + idRegistro +
                ", valorRegistro=" + valorRegistro +
                ", tipoMedida='" + tipoMedida + '\'' +
                ", detalheRegistro='" + detalheRegistro + '\'' +
                ", dtHoraRegistro=" + dtHoraRegistro +
                ", fkComponente=" + fkComponente +
                ", conexao=" + conexao +
                '}';
    }
}
