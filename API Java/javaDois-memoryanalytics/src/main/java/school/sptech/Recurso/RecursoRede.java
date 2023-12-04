package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.rede.RedeInterface;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;
import school.sptech.Servidores.Servidor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
public class RecursoRede {
    private List<JdbcTemplate> conexoes;

    public RecursoRede() {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    Looca looca = new Looca();
    public Integer getFkServer() {
        String macAddres = "";
        for (int i = 0; i < looca.getRede().getGrupoDeInterfaces().getInterfaces().size(); i++) {

            String macAddresAtual = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac();

            if (macAddresAtual.isBlank() || macAddresAtual == null || macAddresAtual.isEmpty()) {
                macAddres = "Mac Address não encontrado";
            } else {
                macAddres = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac();
                break;
            }
        }
        List<Servidor> teste = conexoes.get(1).query("SELECT idServidor FROM servidor where macAdress = '%s';".formatted(macAddres),
                new BeanPropertyRowMapper<>(Servidor.class));
        return teste.get(0).getIdServidor();
    }

    public Integer getFkComponente(){
        String enderecoMac = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();
        List<Componente> teste = conexoes.get(1).query("""
                        SELECT idComponente FROM componente JOIN servidor ON fkServidor = idServidor WHERE tipoComponente = 'REDE' AND fkServidor = %d;
                        """.formatted(getFkServer()),
                new BeanPropertyRowMapper<>(Componente.class));
        return teste.get(0).getIdComponente();
    }

    public Double capturarRegistroEnviados(){
        Double mbEnviados = 0.0;
        List<RedeInterface> interfacesRede= looca.getRede().getGrupoDeInterfaces().getInterfaces();
        for (int i = 0; i < interfacesRede.size(); i++) {
            if (interfacesRede.get(i).getBytesEnviados() != 0 || interfacesRede.get(i).getBytesRecebidos() != null){
                mbEnviados = interfacesRede.get(i).getBytesEnviados() * Math.pow(10,-6);
                // System.out.println(mbEnviados);
                break;
            }else {
                return null;
            }
        }
        return mbEnviados;
    }

    public Double capturarRegistroRecebidos(){
        Double mbRecebidos = 0.0;
        List<RedeInterface> interfacesRede= looca.getRede().getGrupoDeInterfaces().getInterfaces();
        for (int i = 0; i < interfacesRede.size(); i++) {
            if (interfacesRede.get(i).getBytesRecebidos() != 0 || interfacesRede.get(i).getBytesRecebidos() != null){
                mbRecebidos = interfacesRede.get(i).getBytesRecebidos() * Math.pow(10,-6);
                // System.out.println(mbRecebidos);
                break;
            }else {
                return null;
            }
        }
        return mbRecebidos;
    }

    public void InsertMbEnviados(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Double mbEnviados = capturarRegistroEnviados();
        conexoes.get(1).execute("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES (%s, '%s', '%s', '%s', %d);".formatted(mbEnviados.toString().replace(",","."), "Mb", "Enviados Rede", dataHoraAtual.format(formatter), getFkComponente()));
    }
    public void InsertMbRecebidos(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Double mbRecebidos = capturarRegistroRecebidos();
        conexoes.get(1).execute("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES (%s, '%s', '%s', '%s', %d);".formatted(mbRecebidos.toString().replace(",","."), "Mb", "Recebidos Rede", dataHoraAtual.format(formatter), getFkComponente()));
    }

    public void InsertMbpsTransmissao(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        Double taxaDeTrasmissao = capturarRegistroEnviados() + capturarRegistroRecebidos()/2;
        //System.out.println(taxaDeTrasmissao);

        conexoes.get(1).execute(("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, " +
                "fkComponente) VALUES (%s, '%s', '%s', '%s', %d);").formatted(
                taxaDeTrasmissao.toString().replace(",","."),
                "Mbps", "Taxa de Transmissão", dataHoraAtual.format(formatter), getFkComponente()));
    }
    public void InsertPacotesEnviados(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Double pacotesEnviados = 0.0;
        List<RedeInterface> interfacesRede= looca.getRede().getGrupoDeInterfaces().getInterfaces();
        for (int i = 0; i < interfacesRede.size(); i++) {
            if (interfacesRede.get(i).getPacotesEnviados() != 0){
                pacotesEnviados = (double) interfacesRede.get(i).getPacotesEnviados();
                // System.out.println(mbEnviados);
                break;
            }
        }
        conexoes.get(1).execute("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES (%s, '%s', '%s', '%s', %d);".formatted(
                pacotesEnviados.toString().replace(",","."), "Pacotes", "Enviados Rede",
                dataHoraAtual.format(formatter), getFkComponente()));
    }


    public void InsertPacotesRecebidos(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Double pacotesRecebidos = 0.0;
        List<RedeInterface> interfacesRede= looca.getRede().getGrupoDeInterfaces().getInterfaces();
        for (int i = 0; i < interfacesRede.size(); i++) {
            if (interfacesRede.get(i).getPacotesRecebidos() != 0){
                pacotesRecebidos = (double) interfacesRede.get(i).getPacotesRecebidos();
                // System.out.println(mbEnviados);
                break;
            }
        }
        conexoes.get(1).execute("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES (%s, '%s', '%s', '%s', %d);".formatted(
                pacotesRecebidos.toString().replace(",","."), "Pacotes", "Recebidos Rede",
                dataHoraAtual.format(formatter), getFkComponente()));
    }

    public void InsertLatencia(){
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        Double taxaDeTrasmissao = capturarRegistroEnviados() + capturarRegistroRecebidos()/2;
        //System.out.println(taxaDeTrasmissao);

        Double receivedBytes = capturarRegistroRecebidos() * 1000000;
        Double sentBytes = capturarRegistroEnviados() * 1000000;
        Double totalBytes = receivedBytes + sentBytes;
        Double totalTime = totalBytes / taxaDeTrasmissao;
        Double tempoLatencia = (totalTime / 2) * Math.pow(10,-4);

        conexoes.get(1).execute(("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES (%s, '%s', '%s', '%s', %d);").formatted(
                tempoLatencia.toString().replace(",","."),
                "ms", "Latência da Rede", dataHoraAtual.format(formatter), getFkComponente()));
    }

    public void capturarRegistro(){
        RecursoRede rR = new RecursoRede();
        rR.InsertMbEnviados();
        rR.InsertMbRecebidos();
        rR.InsertMbpsTransmissao();
        rR.InsertLatencia();
        rR.InsertPacotesEnviados();
        rR.InsertPacotesRecebidos();
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }
}
