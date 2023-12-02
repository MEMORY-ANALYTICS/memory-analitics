package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;

import java.util.List;

public class RecursoDiscoUso extends Recurso {

    private String nome;
    private String unidadeMedida;
    private Double valorRegistro;
    private Looca looca = new Looca();

    public RecursoDiscoUso(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro, null); //TODO TROCAR DE NULL
    }

    public RecursoDiscoUso() {
        this("Disco Padrão", "% de Uso", 0.0);
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

    public Integer selectFkComponente(){
        List<Componente> teste = getConexoes().get(1).query("""
                        SELECT idComponente JOIN servidor on fkServidor = idServidor where modelo = '%s' and macAdress = '%s'
                        """.formatted(
                        looca.getGrupoDeDiscos().getDiscos().get(0).getNome(),
                        looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac()
                ),
                new BeanPropertyRowMapper<>(Componente.class));
        return teste.get(0).getIdComponente();
    }

    @Override
    public Double capturarRegistro() {
        Looca looca = new Looca();
        DiscoGrupo discoGrupo = looca.getGrupoDeDiscos();
        Disco disco = discoGrupo.getDiscos().get(0);
        setNome("Disco " + disco.getNome());
        double usoDeDiscoPercentual = calcularUsoDeDiscoPercentual(disco);
        setValorRegistro(usoDeDiscoPercentual);
        return usoDeDiscoPercentual;
    }

    private double calcularUsoDeDiscoPercentual(Disco disco) {
        double bytesEmUso = disco.getBytesDeLeitura() + disco.getBytesDeEscritas();
        double tamanhoTotalDoDisco = disco.getTamanho();

        if (tamanhoTotalDoDisco > 0) {
            return (bytesEmUso / tamanhoTotalDoDisco);
        } else {
            return 0.0;
        }
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
                        "valorRegistro=%.2f%%, " +
                nome, unidadeMedida, valorRegistro);
    }
}
