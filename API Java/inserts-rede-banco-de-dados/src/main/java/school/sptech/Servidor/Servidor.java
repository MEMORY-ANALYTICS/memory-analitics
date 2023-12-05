package school.sptech.Servidor;


import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componente.Componente;
import school.sptech.Conexao.Conexao;
import school.sptech.Conexao.ConexaoMySql;
import school.sptech.Conexao.ConexaoSqlServer;

import java.util.ArrayList;
import java.util.List;

public class Servidor {
    private Integer idServidor;
    private String SistemaOperacionalServidor;
    private String apelidoServidor;
    private String localServidor;
    private String macAdress;
    private Integer fkEmpresa;
    private List<Componente> componentes;
    private List<JdbcTemplate> conexoes;

    public Servidor(String sistemaOperacional, String apelido, String macAdress,
                    String localServidor) {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.SistemaOperacionalServidor = sistemaOperacional;
        this.apelidoServidor = apelido;
        this.macAdress = macAdress;
        this.localServidor = localServidor;
        this.componentes =new ArrayList<>();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    public Servidor() {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    public String pegarMacAddresLooca(){
        Looca looca = new Looca();
        String macAddres = "";
        for (int i = 0; i < looca.getRede().getGrupoDeInterfaces().getInterfaces().size(); i++) {

            String macAddresAtual = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac();

            if (macAddresAtual.isBlank() || macAddresAtual == null || macAddresAtual.isEmpty()) {
                macAddres = "Não encontrado";
            } else {
                macAddres = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac();
                break;
            }
        }
        return macAddres;
    }
    public void querySelectComponentes(){

    }
    public Integer getIdServidor() {
        return idServidor;
    }

    public void setIdServidor(Integer idServidor) {
        this.idServidor = idServidor;
    }

    public String getSistemaOperacionalServidor() {
        return SistemaOperacionalServidor;
    }

    public void setSistemaOperacionalServidor(String sistemaOperacionalServidor) {
        SistemaOperacionalServidor = sistemaOperacionalServidor;
    }

    public String getApelidoServidor() {
        return apelidoServidor;
    }

    public void setApelidoServidor(String apelidoServidor) {
        this.apelidoServidor = apelidoServidor;
    }

    public String getLocalServidor() {
        return localServidor;
    }

    public void setLocalServidor(String localServidor) {
        this.localServidor = localServidor;
    }

    public String getMacAdress() {
        return macAdress;
    }

    public void setMacAdress(String macAdress) {
        this.macAdress = macAdress;
    }

    public Integer getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(Integer fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
    }

    public List<Componente> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<Componente> componentes) {
        this.componentes = componentes;
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }

    @Override
    public String toString() {
        return "Servidor{" +
                "idServidor=" + idServidor +
                ", SistemaOperacionalServidor='" + SistemaOperacionalServidor + '\'' +
                ", apelidoServidor='" + apelidoServidor + '\'' +
                ", localServidor='" + localServidor + '\'' +
                ", macAdress='" + macAdress + '\'' +
                ", fkEmpresa=" + fkEmpresa +
                ", componentes=" + componentes +
                ", conexoes=" + conexoes +
                '}' + '\n';
    }
}
