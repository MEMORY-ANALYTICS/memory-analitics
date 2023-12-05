package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processos.Processo;
import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Recurso.Processos.ProcessosBanidos;
import school.sptech.Servicos.BancoDados.ConexaoMySql;
import school.sptech.Servicos.BancoDados.ConexaoSqlServer;
import school.sptech.Servidores.Servidor;
import school.sptech.Slack.Alertas;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;

public class RecursoProcessos {
    private Looca looca = new Looca();
    private Alertas alerta = new Alertas();
    private List<JdbcTemplate> conexoes;

    public RecursoProcessos() {
        ConexaoSqlServer conexaoSqlServer = new ConexaoSqlServer();
        ConexaoMySql conexaoMySql = new ConexaoMySql();
        JdbcTemplate con1 = conexaoSqlServer.criarConexao();
        JdbcTemplate con2 = conexaoMySql.criarConexao();
        this.conexoes = new ArrayList<>();
        conexoes.add(con1);
        conexoes.add(con2);
    }

    public Integer quantidadeProcessosOnline() {
        Integer qtdProcessos = 0;
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            qtdProcessos++;
        }
        return qtdProcessos;
    }

    public String getProcessoMaiorMediaUso() {

        Double mediaAtualComparacao = .0;
        Processo processoAtualComparacao;
        List<Double> listaMediaProcessos = new ArrayList<>();
        List<Processo> listaOrdemProcessos = new ArrayList<>();
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            double mediaAtual = (processo.getUsoCpu() + processo.getUsoMemoria()) / 2;
            listaMediaProcessos.add(mediaAtual);
            listaOrdemProcessos.add(processo);
        }

        OptionalDouble maiorMediaDaLista = listaMediaProcessos.stream().mapToDouble(v -> v).max();
        Processo processoMaiorMedia = listaOrdemProcessos.get(listaMediaProcessos.indexOf(maiorMediaDaLista.getAsDouble()));

//        alerta.alertarCanal("O processo: "+ processoMaiorMedia.getNome() +" está utilizando mais recursos do servidor!");
        return processoMaiorMedia.getNome();
    }

    public List<String> getAllNomesProcessos() {
        List<String> listaNomes = new ArrayList<>();
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            listaNomes.add(processo.getNome());
        }
        return listaNomes;
    }

    public String getUsoCpuProcessos() {
        Double usoTotal = .0;
        String strUso = "";
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            usoTotal += processo.getUsoCpu();
        }
        if (usoTotal > 2) {
//            alerta.alertarCanal("Os processos estão utilizando: " + Math.ceil((usoTotal/quantidadeProcessosOnline())) + "% da CPU");
        }
        usoTotal = Math.ceil(usoTotal / quantidadeProcessosOnline());
        strUso = usoTotal.toString();
        strUso = strUso.replace(",", ".");
        return strUso;
    }

    public String getUsoRamProcessos() {
        Double usoTotal = .0;
        String strUso = "";
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            usoTotal += processo.getUsoMemoria();
        }
        if (usoTotal > 2) {
//            alerta.alertarCanal("Os processos estão utilizando: " + Math.ceil((usoTotal)) + "% da RAM");
        }
        usoTotal = Math.ceil(usoTotal);
        strUso = usoTotal.toString();
        strUso = strUso.replace(",", ".");
        return strUso;
    }

    public void listarTodosProcessos() {
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            System.out.println(processo);
        }
    }

    public Integer getFkServer() {
        String enderecoMac = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();

        List<Servidor> teste = getConexoes().get(0).query("SELECT idServidor FROM servidor WHERE macAdress = '%s';"
                .formatted(enderecoMac), new BeanPropertyRowMapper<>(Servidor.class));
        return teste.get(0).getIdServidor();
    }


    public void killTask() throws IOException {
        List<ProcessosBanidos> listaProcessosBanidos = getConexoes().get(0).query("SELECT * FROM processosbanidos where fkServidor = %d".formatted(getFkServer()), new BeanPropertyRowMapper<>(ProcessosBanidos.class));
        Runtime rt = Runtime.getRuntime();
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()) {
            for (ProcessosBanidos processosBanidos1 : listaProcessosBanidos) {
                if (System.getProperty("os.name").toLowerCase().contains("windows")) {
                    if (StringUtils.containsIgnoreCase(processosBanidos1.getNomeProcesso(), processo.getNome())) {
                        rt.exec("taskkill /PID " + processo.getPid());
//                        alerta.alertarCanal("Tentativa de inicialização de processo indevido, processo : " + processo.getNome());
                    }
                } else {
                    if (StringUtils.containsIgnoreCase(processosBanidos1.getNomeProcesso(), processo.getNome())) {
                        rt.exec("kill -9 " + processo.getPid());
//                        alerta.alertarCanal("Tentativa de inicialização de processo indevido, processo : " + processo.getNome());
                    }
                }
            }
        }
    }

    public void capturarRegistro() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("y-M-d H:m:s");
        LocalDateTime dateTime = LocalDateTime.now();
        dateTime.format(formatter);
        getConexoes().get(0).execute("INSERT INTO processos VALUES (%s, %s,'%s', %d, '%s',%d)"
                .formatted(getUsoCpuProcessos(),
                        getUsoRamProcessos(),
                        getProcessoMaiorMediaUso(),
                        quantidadeProcessosOnline(),
                        dateTime.format(formatter),
                        getFkServer()));
        getConexoes().get(1).execute("INSERT INTO processos VALUES (null, %s, %s,'%s', %d, '%s',%d)"
                .formatted(getUsoCpuProcessos(),
                        getUsoRamProcessos(),
                        getProcessoMaiorMediaUso(),
                        quantidadeProcessosOnline(),
                        dateTime.format(formatter),
                        getFkServer()));
        getConexoes().get(0).execute("INSERT INTO chamadoServidor(requisitante) VALUES ('Processo')");
        try {
            killTask();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }

    public static void main(String[] args) {
        Looca looca1 = new Looca();
        RecursoProcessos recursoProcessos = new RecursoProcessos();
        System.out.println(looca1.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac());
    }
}
