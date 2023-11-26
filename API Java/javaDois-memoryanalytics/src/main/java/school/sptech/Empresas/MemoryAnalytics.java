package school.sptech.Empresas;

import school.sptech.BancoDados.Database;

import java.util.List;

public class MemoryAnalytics {
    private List<Database> bancosDados;
    private List<Empresa> empresas;

    public MemoryAnalytics(List<Database> bancosDados, List<Empresa> empresas) {
        this.bancosDados = bancosDados;
        this.empresas = empresas;
    }

    protected void cadastrarEmpresa(Empresa empresa){

    }

    public List<Database> getBancosDados() {
        return bancosDados;
    }

    public void setBancosDados(List<Database> bancosDados) {
        this.bancosDados = bancosDados;
    }

    public List<Empresa> getEmpresas() {
        return empresas;
    }

    public void setEmpresas(List<Empresa> empresas) {
        this.empresas = empresas;
    }

    @Override
    public String toString() {
        return "MemoryAnalytics{" +
                "bancosDados=" + bancosDados +
                ", empresas=" + empresas +
                '}';
    }
}
