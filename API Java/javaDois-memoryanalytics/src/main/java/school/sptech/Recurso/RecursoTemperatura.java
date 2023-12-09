package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.temperatura.Temperatura;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class RecursoTemperatura  extends Recurso{
    private List<JdbcTemplate> conexoes;
    public RecursoTemperatura(Componente componente) {
        super("temperatura","°C", 0.0, componente);

        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);

    }

    @Override
    public Double capturarRegistro() {

        Temperatura temperatura = new Temperatura();

        LocalDateTime dataHoraAtual = LocalDateTime.now();
        getConexoes().get(0).execute("INSERT INTO registro VALUES (%s, '%s','%s', '%s', %d)"
                .formatted(getValorRegistro().toString().replace(",","."),
                        getUnidadeMedida(),
                        "temperatura do processador",
                        dataHoraAtual.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
                        getIdComponente()));
        getConexoes().get(1).execute("INSERT INTO registro VALUES (%s, '%s','%s', '%s', %d)"
                .formatted(getValorRegistro().toString().replace(",","."),
                        getUnidadeMedida(),
                        "temperatura do processador",
                        dataHoraAtual.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")),
                        getIdComponente()));

        return temperatura.getTemperatura();
    }

    public Integer getIdComponente(){
        Looca looca = new Looca();
        String enderecoMac = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();
        List<Componente> teste = conexoes.get(1).query("""
                        SELECT idComponente FROM componente JOIN servidor ON fkServidor = idServidor WHERE tipoComponente = 'REDE' AND fkServidor = %d;
                        """.formatted(getFkServer()),
                new BeanPropertyRowMapper<>(Componente.class));
        return teste.get(0).getIdComponente();
    }

    @Override
    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    @Override
    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }

}
