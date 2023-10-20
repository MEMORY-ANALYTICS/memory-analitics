package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;
import com.mysql.cj.log.Log;

public class Cpu {

    private String nome;
    private String id;
    private String identificador;
    private String microarquitetura;
    private Long frequencia;
    private Integer pacotesFisicos;
    private Integer cores;
    private Integer threads;
    private Double uso;

    public Cpu() {
        Looca looca  = new Looca();
        this.nome = looca.getProcessador().getNome();
        this.id = looca.getProcessador().getId();
        this.identificador = looca.getProcessador().getIdentificador();
        this.microarquitetura = looca.getProcessador().getMicroarquitetura();
        this.frequencia = looca.getProcessador().getFrequencia();
        this.pacotesFisicos = looca.getProcessador().getNumeroPacotesFisicos();
        this.cores = looca.getProcessador().getNumeroPacotesFisicos();
        this.threads = looca.getProcessador().getNumeroCpusLogicas();
        this.uso = looca.getProcessador().getUso();
    }

    @Override
    public String toString() {
        return "Cpu{" +
                "nome='" + nome + '\'' +
                ", id='" + id + '\'' +
                ", identificador='" + identificador + '\'' +
                ", microarquitetura='" + microarquitetura + '\'' +
                ", frequencia=" + frequencia +
                ", pacotesFisicos=" + pacotesFisicos +
                ", cores=" + cores +
                ", threads=" + threads +
                ", uso=" + uso +
                '}';
    }
}
