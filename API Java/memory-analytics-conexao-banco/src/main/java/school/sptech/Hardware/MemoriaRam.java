package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;

public class MemoriaRam {

    private Long uso;
    private Long disponivel;
    private Long total;

    public MemoriaRam() {
        Looca looca = new Looca();
        this.uso = looca.getMemoria().getEmUso();
        this.disponivel = looca.getMemoria().getDisponivel();
        this.total = looca.getMemoria().getTotal();
    }

    @Override
    public String toString() {
        return "MemoriaRam{" +
                "uso=" + uso +
                ", disponivel=" + disponivel +
                ", total=" + total +
                '}';
    }
}
