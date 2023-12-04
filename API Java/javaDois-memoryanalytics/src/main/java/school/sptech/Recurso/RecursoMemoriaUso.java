    package school.sptech.Recurso;
    import com.github.britooo.looca.api.core.Looca;
    import com.github.britooo.looca.api.group.discos.Disco;
    import com.github.britooo.looca.api.group.discos.DiscoGrupo;
    import com.github.britooo.looca.api.group.memoria.Memoria;
    import org.springframework.jdbc.core.BeanPropertyRowMapper;
    import org.springframework.jdbc.core.JdbcTemplate;
    import school.sptech.Componentes.Componente;
    import school.sptech.Servicos.Data;

    import java.time.LocalDateTime;
    import java.time.format.DateTimeFormatter;
    import java.util.List;

    public class RecursoMemoriaUso extends Recurso {

        private final Memoria memoria;

        Looca looca = new Looca();

        public RecursoMemoriaUso(String nome, String unidadeMedida, Double valorRegistro) {
            super(nome, unidadeMedida, valorRegistro, null); //TODO TROCAR DE NULL
            this.memoria = new Memoria();
        }

        public RecursoMemoriaUso() {
            this("Memória", "% de Uso", 0.0);
        }

        @Override
        public Double capturarRegistro() {
            Memoria memoria = looca.getMemoria();

            setNome("Memória Padrão");
            setUnidadeMedida("% de Uso");

            double usoDeMemoriaPercentual = calcularUsoDeMemoriaPercentual(memoria);
            setValorRegistro(Math.ceil(usoDeMemoriaPercentual));

            LocalDateTime dataHoraAtual = LocalDateTime.now();
            getConexoes().get(0).execute("INSERT INTO registro VALUES (%s, '%s','%s', '%s', %d)"
                    .formatted(getValorRegistro().toString().replace(",","."),
                            getUnidadeMedida(),
                            "RecursoMemoriaUso",
                            dataHoraAtual.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
                            selectFkComponente()));
            getConexoes().get(1).execute(
                    "INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES ("
                            + getValorRegistro() + ", '"
                            + getUnidadeMedida() + "', '"
                            + "RecursoMemoriaUso', '"
                            + Data.formatarParaMySQL(dataHoraAtual) + "', "
                            + selectFkComponente() + ")"
            );
            return usoDeMemoriaPercentual;
        }

        public Integer selectFkComponente() {
            List<Componente> teste = getConexoes().get(1).query("""
                        SELECT idComponente FROM componente JOIN servidor ON fkServidor = idServidor WHERE tipoComponente = 'RAM' AND macAdress = '%s';
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
        public Memoria getMemoria() {
            return memoria;
        }

        private double calcularUsoDeMemoriaPercentual(Memoria memoria) {
            double memoriaEmUso = memoria.getEmUso();
            double memoriaTotal = memoria.getTotal();

            if (memoriaTotal > 0) {
                return (memoriaEmUso / memoriaTotal) * 100;
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
            return String.format("Nome: %s\nUnidade de Medida: %s\nValor de Registro: %.2f\n",
                    getNome(), getUnidadeMedida(), getValorRegistro());
        }

        public static void main(String[] args) {
            RecursoMemoriaUso memoriaUso = new RecursoMemoriaUso();
            memoriaUso.capturarRegistro();
        }
    }
