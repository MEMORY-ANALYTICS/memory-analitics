package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;

public class RecursoDiscoUso extends Recurso {

    private String nome;
    private String unidadeMedida;
    private Double valorRegistro;
    private Double espacoDisponivelGB;
    private Double espacoOcupadoGB;
    private Double tamanhoTotalGB;

    public RecursoDiscoUso(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro);
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

    public Double getEspacoDisponivelGB() {
        return espacoDisponivelGB;
    }

    public void setEspacoDisponivelGB(Double espacoDisponivelGB) {
        this.espacoDisponivelGB = espacoDisponivelGB;
    }

    public Double getEspacoOcupadoGB() {
        return espacoOcupadoGB;
    }

    public void setEspacoOcupadoGB(Double espacoOcupadoGB) {
        this.espacoOcupadoGB = espacoOcupadoGB;
    }

    public Double getTamanhoTotalGB() {
        return tamanhoTotalGB;
    }

    public void setTamanhoTotalGB(Double tamanhoTotalGB) {
        this.tamanhoTotalGB = tamanhoTotalGB;
    }

    public Double capturarRegistro() {
        Looca looca = new Looca();
        DiscoGrupo discoGrupo = looca.getGrupoDeDiscos();
        Disco disco = discoGrupo.getDiscos().get(0);

        setNome("Disco " + disco.getNome());

        double usoDeDiscoPercentual = calcularUsoDeDiscoPercentual(disco);
        setValorRegistro(usoDeDiscoPercentual);

        long bytesLidos = disco.getBytesDeLeitura();
        long bytesEscritos = disco.getBytesDeEscritas();
        double gigabytesLidos = bytesLidos / (1024.0 * 1024.0 * 1024.0);
        double gigabytesEscritos = bytesEscritos / (1024.0 * 1024.0 * 1024.0);
        double tamanhoTotalGB = disco.getTamanho() / (1024 * 1024 * 1024.0);
        double espacoOcupadoGB = gigabytesEscritos + gigabytesLidos;

        if (espacoOcupadoGB <= tamanhoTotalGB) {
            espacoDisponivelGB = tamanhoTotalGB - espacoOcupadoGB;
        } else {
            espacoOcupadoGB = tamanhoTotalGB;
            espacoDisponivelGB = 0.0;
        }

        setEspacoOcupadoGB(espacoOcupadoGB);

        setEspacoDisponivelGB(espacoDisponivelGB);

        setTamanhoTotalGB(tamanhoTotalGB);

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
    public String toString() {
        return String.format("RecursoDiscoUso{" +
                        "nome='%s', " +
                        "unidadeMedida='%s', " +
                        "valorRegistro=%.2f%%, " +
                        "espacoDisponivelGB=%.2f GB, " +
                        "espacoOcupadoGB=%.2f GB, " +
                        "tamanhoTotalGB=%.2f GB}",
                nome, unidadeMedida, valorRegistro, espacoDisponivelGB, espacoOcupadoGB, tamanhoTotalGB);
    }
}
