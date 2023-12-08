package school.sptech.Servidores;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Recurso.*;
import school.sptech.Servicos.BancoDados.Conexao;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;
import school.sptech.Registros.Registro;
import school.sptech.Registros.RegistroRowMapper;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
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

        List<Servidor> servidors = conexoes.get(0).query("SELECT * FROM Servidor WHERE macAdress = ?",
                new ServidorRowMapper(),
                mac);

        return servidors.get(0).getIdServidor();
    };
    public void calcDowntime() {
        int idServidor = pegarId();
        LocalDateTime dtHoraAgora = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        String stringDataFormatada = dtHoraAgora.format(formatter);

        dtHoraAgora = LocalDateTime.parse(stringDataFormatada, formatter);

        List<Registro> ultimoRegistro = conexoes.get(0).query("""
                SELECT TOP 1 *
                FROM dbo.Registro
                JOIN dbo.Componente ON fkComponente = idComponente
                JOIN dbo.Servidor ON fkServidor = idServidor
                WHERE idServidor = ?
                ORDER BY dtHoraRegistro DESC;""",
                new RegistroRowMapper(),
                idServidor);

        List<Registro> ultimoRegistroMySql = conexoes.get(1).query("""
			    SELECT *
                FROM Registro
                JOIN Componente ON fkComponente = idComponente
                JOIN Servidor ON fkServidor = idServidor
                WHERE idServidor = ?
                ORDER BY dtHoraRegistro
                DESC LIMIT 1;""",
                new RegistroRowMapper(),
                idServidor);

        System.out.println(idServidor);

        LocalDateTime ultimo = ultimoRegistroMySql.get(0).getDtHoraRegistro();

        System.out.println(ultimo);
        System.out.println(dtHoraAgora);

        long diferencaDatas = ChronoUnit.SECONDS.between(ultimo, dtHoraAgora);

        System.out.println("Segundo de Downtime: " + diferencaDatas);

        if (diferencaDatas > 10) {
            conexoes.get(0).update("""
                    INSERT INTO downtimeServidor (tempoDowntime, dtHoraDowntime, fkServidor) VALUES
                    (?, ?, ?);
                    """, diferencaDatas, dtHoraAgora, idServidor);
            conexoes.get(1).update("""
                    INSERT INTO downtimeServidor (tempoDowntime, dtHoraDowntime, fkServidor) VALUES
                    (?, ?, ?);
                    """, diferencaDatas, dtHoraAgora, idServidor);
        }

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

    public static void main(String[] args) {
        RecursoDiscoTamanhoTotal discoTamanho = new RecursoDiscoTamanhoTotal();
        RecursoDiscoUso discoUso = new RecursoDiscoUso();
        RecursoMemoriaUso memoriaUso = new RecursoMemoriaUso();
        RecursoProcessadorFrequencia processadorFrequencia = new RecursoProcessadorFrequencia();
        RecursoProcessadorUso processadorUso = new RecursoProcessadorUso();

        LocalDateTime dataHora = LocalDateTime.now();
        school.sptech.Servidores.Downtime downtime = new school.sptech.Servidores.Downtime(0, dataHora, 4);

//        downtime.calcDowntime();
        discoTamanho.capturarRegistro();
        discoUso.capturarRegistro();
        memoriaUso.capturarRegistro();
        processadorFrequencia.capturarRegistro();
        processadorUso.capturarRegistro();

    }
}
