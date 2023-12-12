package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;
import school.sptech.Servicos.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class RecursoDiscoTamanhoTotal extends Recurso {

    private String nome;
    private String unidadeMedida;
    private Double valorRegistro;

    private Looca looca = new Looca();

    public RecursoDiscoTamanhoTotal(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro, null); //TODO TROCAR DE NULL
    }

    public RecursoDiscoTamanhoTotal() {
        this("Disco Padrão", "Gb", 0.0);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    public Double getValorRegistro() {
        return valorRegistro;
    }

    public void setValorRegistro(Double valorRegistro) {
        this.valorRegistro = valorRegistro;
    }

    public Integer selectFkComponente() {
        List<Componente> teste = getConexoes().get(0).query("""
                        SELECT idComponente FROM componente JOIN servidor ON fkServidor = idServidor WHERE tipoComponente = 'DISCO' AND macAdress = '%s';
                        """.formatted(
                        looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac()
                ),
                new BeanPropertyRowMapper<>(Componente.class));

        // Verificar se a lista não está vazia antes de acessar o primeiro elemento
        if (!teste.isEmpty()) {
            return teste.get(0).getIdComponente();
        } else {
            // Tratar o caso em que a lista está vazia, por exemplo, retornar null ou lançar uma exceção
            return null; // ou lançar uma exceção adequada
        }
    }

    @Override
    public Double capturarRegistro(String dtHoraRegistroSQL, String dtHoraRegistroMySQL) {
        Looca looca = new Looca();
        DiscoGrupo discoGrupo = looca.getGrupoDeDiscos();
        Disco disco = discoGrupo.getDiscos().get(0);

        setNome("Disco " + disco.getNome());
        setUnidadeMedida("Gigabyte");

        double tamanhoTotalGB = disco.getTamanho() / (1024 * 1024 * 1024.0);
        String tamanhoFormatado = String.format("%.0f", tamanhoTotalGB);
        setValorRegistro(Double.parseDouble(tamanhoFormatado));

        getConexoes().get(0).execute("INSERT INTO registro VALUES (%s, '%s','%s', '%s', %d)"
                .formatted(getValorRegistro().toString().replace(",", "."),
                        getUnidadeMedida(),
                        "RecursoDiscoTamanhoTotal",
                        dtHoraRegistroSQL,
                        selectFkComponente()));
        getConexoes().get(1).execute(
                "INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES ("
                        + getValorRegistro() + ", '"
                        + getUnidadeMedida() + "', '"
                        + "RecursoDiscoTamanhoTotal', '"
                        + dtHoraRegistroMySQL + "', "
                        + selectFkComponente() + ")"
        );
        return tamanhoTotalGB;
    }

    @Override
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public String toString() {
        return String.format("RecursoDiscoUso{" +
                        "nome='%s', " +
                        "unidadeMedida='%s', " +
                        "valorRegistro=%.2f%%, ",
                nome, unidadeMedida, valorRegistro);
    }
}