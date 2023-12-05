package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;
import school.sptech.Servicos.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class RecursoProcessadorFrequencia extends Recurso {
    private final Processador processador;
    private Double freqMHz;

    private Looca looca = new Looca();


    public RecursoProcessadorFrequencia(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, 0.0, null); //TODO TROCAR DE NULL
        this.processador = new Processador();
    }

    public RecursoProcessadorFrequencia () {
        this("Processador", "Mhz", 0.0);
    }

    @Override
    public Double capturarRegistro() {
        Processador processador = looca.getProcessador();

        setNome(processador.getNome());
        setUnidadeMedida("Megahertz");

        double frequenciaMHz = processador.getFrequencia() / 1e6; // Convertendo de Hz para MHz
        setValorRegistro(Math.ceil(frequenciaMHz));

        LocalDateTime dataHoraAtual = LocalDateTime.now();
        getConexoes().get(0).execute("INSERT INTO registro VALUES (%s, '%s','%s', '%s', %d)"
                .formatted(getValorRegistro().toString().replace(",","."),
                        getUnidadeMedida(),
                        "RecursoProcessadorFrequencia",
                        dataHoraAtual.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
                        selectFkComponente()));
        getConexoes().get(1).execute(
                "INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES ("
                        + getValorRegistro() + ", '"
                        + getUnidadeMedida() + "', '"
                        + "RecursoProcessadorFrequencia', '"
                        + Data.formatarParaMySQL(dataHoraAtual) + "', "
                        + selectFkComponente() + ")"
        );
        return frequenciaMHz;
    }


    public Integer selectFkComponente() {
        List<Componente> teste = getConexoes().get(0).query("""
                        SELECT idComponente FROM componente JOIN servidor ON fkServidor = idServidor WHERE tipoComponente = 'CPU' AND macAdress = '%s';
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
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public String toString() {
        return String.format("Nome: %s\nUnidade de Medida: %s\nValor do Registro: %.1f%% MHz",
                getNome(), getUnidadeMedida(), getValorRegistro());
    }

    public static void main(String[] args) {
        RecursoProcessadorFrequencia processadorFrequencia = new RecursoProcessadorFrequencia();
        processadorFrequencia.capturarRegistro();
    }

}

