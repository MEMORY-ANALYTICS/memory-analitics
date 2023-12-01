package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processador.Processador;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;

import java.time.LocalDateTime;
import java.util.List;

public class RecursoProcessadorFrequencia extends Recurso {
    private final Processador processador;
    private Double freqMHz;

    private Looca looca = new Looca();


    public RecursoProcessadorFrequencia(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, 0.0);
        this.processador = new Processador();
    }

    public RecursoProcessadorFrequencia () {
        this("Processador", "Mhz", 0.0);
        double frequenciaMHz = processador.getFrequencia() / 1e6; // Convertendo de Hz para MHz
        setValorRegistro(frequenciaMHz);
    }


    public Integer selectFkComponente(){
        List<Componente> teste = getConexoes().get(1).query("""
                        SELECT idComponente JOIN servidor on fkServidor = idServidor where nomeModelo = '%s' and macAdress = '%s'
                        """.formatted(
                        looca.getProcessador().getNome(),
                        looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac()
                        ),
                new BeanPropertyRowMapper<>(Componente.class));
        return teste.get(0).getIdComponente();
    }

    @Override
    public Double capturarRegistro() {
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        getConexoes().get(0).execute("INSERT INTO registro VALUES(null,?,?,?,?)".formatted(getValorRegistro(),getUnidadeMedida(),"RecursoProcessadorFrequencia", dataHoraAtual,selectFkComponente()));
        getConexoes().get(1).execute("INSERT INTO registro INSERT INTO registro VALUES(null,?,?,?,?)".formatted(getValorRegistro(),getUnidadeMedida(),"RecursoProcessadorFrequencia", dataHoraAtual,selectFkComponente()));
        return getValorRegistro();
    }

    @Override
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public String toString() {
        return String.format("Nome: %s\nUnidade de Medida: %s\nValor do Registro: %.1f%% MHz",
                getNome(), getUnidadeMedida(), getValorRegistro());
    }

    public static void main(String[] args) {
        RecursoProcessadorFrequencia recursoProcessadorFrequencia = new RecursoProcessadorFrequencia();
        recursoProcessadorFrequencia.capturarRegistro();
    }

}

