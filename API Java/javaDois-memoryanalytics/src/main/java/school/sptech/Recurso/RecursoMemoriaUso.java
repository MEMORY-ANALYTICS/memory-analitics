    package school.sptech.Recurso;
    import com.github.britooo.looca.api.core.Looca;
    import com.github.britooo.looca.api.group.memoria.Memoria;
    import org.springframework.jdbc.core.JdbcTemplate;

    import java.util.List;

    public class RecursoMemoriaUso extends Recurso {

        private final Memoria memoria;

        public RecursoMemoriaUso(String nome, String unidadeMedida, Double valorRegistro) {
            super(nome, unidadeMedida, valorRegistro, null); //TODO TROCAR DE NULL
            this.memoria = new Memoria();
        }

        public RecursoMemoriaUso() {
            this("Memória", "% de Uso", 0.0);

            Looca looca = new Looca();
            Memoria memoria = looca.getMemoria();

            double usoDeMemoriaPercentual = calcularUsoDeMemoriaPercentual(memoria);

            setValorRegistro(usoDeMemoriaPercentual);
        }

        public Memoria getMemoria() {
            return memoria;
        }

        @Override
        public Double capturarRegistro() {
            return getValorRegistro();
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
    }
