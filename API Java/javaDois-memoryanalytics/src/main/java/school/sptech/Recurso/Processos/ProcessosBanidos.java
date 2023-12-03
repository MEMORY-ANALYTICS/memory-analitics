package school.sptech.Recurso.Processos;

public class ProcessosBanidos {
    private int idProcesso;
    private String nomeProcesso;
    private int fkServidor;

    public ProcessosBanidos(int idProcesso, String nomeProcesso, int fkServidor) {
        this.idProcesso = idProcesso;
        this.nomeProcesso = nomeProcesso;
        this.fkServidor = fkServidor;
    }

    public ProcessosBanidos() {
    }

    public ProcessosBanidos(String nomeProcesso, int fkServidor) {
        this.nomeProcesso = nomeProcesso;
        this.fkServidor = fkServidor;
    }

    public int getIdProcesso() {
        return idProcesso;
    }

    public void setIdProcesso(int idProcesso) {
        this.idProcesso = idProcesso;
    }

    public String getNomeProcesso() {
        return nomeProcesso;
    }

    public void setNomeProcesso(String nomeProcesso) {
        this.nomeProcesso = nomeProcesso;
    }

    public int getFkServidor() {
        return fkServidor;
    }

    public void setFkServidor(int fkServidor) {
        this.fkServidor = fkServidor;
    }
}
