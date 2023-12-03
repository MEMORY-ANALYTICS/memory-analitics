package school.sptech.Servidores;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Downtime {
    private int tempoDowntime;
    private LocalDateTime dtHora;
    private List<JdbcTemplate> conexoes;
    private Looca looca;

    public Downtime(int tempoDowntime, LocalDateTime dtHora, int fkServidor) {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.tempoDowntime = tempoDowntime;
        this.dtHora = dtHora;
        this.conexoes = new ArrayList<>();
        this.looca = new Looca();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    public int pegarId(){
        String mac = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();

        List<Servidor> servidors = conexoes.get(1).query("SELECT * FROM Servidor WHERE macAdress = ?",
                new ServidorRowMapper(),
                "192.168.1.4");
        return servidors.get(0).getIdServidor();
    };
    public void calcDowntime() {

    }

    public int getTempoDowntime() {
        return tempoDowntime;
    }

    public void setTempoDowntime(int tempoDowntime) {
        this.tempoDowntime = tempoDowntime;
    }

    public LocalDateTime getDtHora() {
        return dtHora;
    }

    public void setDtHora(LocalDateTime dtHora) {
        this.dtHora = dtHora;
    }

    @Override
    public String toString() {
        return "Downtime{" +
                "tempoDowntime=" + tempoDowntime +
                ", dtHora=" + dtHora +
                '}';
    }
}
