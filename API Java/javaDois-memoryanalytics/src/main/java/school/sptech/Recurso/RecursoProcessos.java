package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processos.Processo;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;
import school.sptech.Servidores.Servidor;
import school.sptech.Servidores.ServidorRowMapper;
import school.sptech.Slack.Alertas;

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

    public Integer quantidadeProcessosOnline(){
        Integer qtdProcessos = 0;
        for(Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            qtdProcessos++;
        }
        return qtdProcessos;
    }

    public String getProcessoMaiorMediaUso(){

        Double mediaAtualComparacao = .0;
        Processo processoAtualComparacao;
        List<Double> listaMediaProcessos = new ArrayList<>();
        List<Processo> listaOrdemProcessos = new ArrayList<>();
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            double mediaAtual = (processo.getUsoCpu() + processo.getUsoMemoria())/2;
            listaMediaProcessos.add(mediaAtual);
            listaOrdemProcessos.add(processo);
        }

        OptionalDouble maiorMediaDaLista = listaMediaProcessos.stream().mapToDouble(v -> v).max();
        Processo processoMaiorMedia = listaOrdemProcessos.get(listaMediaProcessos.indexOf(maiorMediaDaLista.getAsDouble()));

        alerta.alertarCanal("O processo: "+ processoMaiorMedia.getNome() +" está utilizando mais recursos do servidor!");
        return processoMaiorMedia.getNome();
    }

    public List<String> getAllNomesProcessos(){
        List<String> listaNomes = new ArrayList<>();
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            listaNomes.add(processo.getNome());
        }
        return listaNomes;
    }

    public Double getUsoCpuProcessos(){
        Double usoTotal = .0;
        for (Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            usoTotal += processo.getUsoCpu();
        }
        if(usoTotal > 2){
            alerta.alertarCanal("Os processos estão utilizando: " + Math.ceil((usoTotal/quantidadeProcessosOnline())) + "% da CPU");
        }
        return Math.ceil(usoTotal/quantidadeProcessosOnline());
    }

    public Double getUsoRamProcessos(){
        Double usoTotal = .0;
        for(Processo processo : looca.getGrupoDeProcessos().getProcessos()){
            usoTotal += processo.getUsoMemoria();
        }
        if(usoTotal > 2){
            alerta.alertarCanal("Os processos estão utilizando: " + Math.ceil((usoTotal)) + "% da RAM");
        }
        return usoTotal;
    }

    public void listarTodosProcessos(){
        for (Processo processo: looca.getGrupoDeProcessos().getProcessos()){
            System.out.println(processo);
        }
    }

    public Integer getFkServer(){

        String enderecoMac = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getEnderecoMac();
        List<Servidor> teste =
                getConexoes().get(0).query("SELECT idServidor FROM servidor where macAdress = '%s';".formatted(enderecoMac), new ServidorRowMapper());

        return teste.get(0).getIdServidor();
    }

    public void capturarRegistro() {
        getConexoes().get(0).execute("INSERT INTO Processos VALUES (%f, %f, %s, %d,%d)"
                .formatted(getUsoCpuProcessos(),getUsoRamProcessos(),getProcessoMaiorMediaUso(),quantidadeProcessosOnline(),getFkServer()));
        getConexoes().get(1).execute("INSERT INTO Processos VALUES (?,?,?,?,?)");
    }

    public List<JdbcTemplate> getConexoes() {
        return conexoes;
    }

    public void setConexoes(List<JdbcTemplate> conexoes) {
        this.conexoes = conexoes;
    }

    public static void main(String[] args) {
        RecursoProcessos recursoProcessos = new RecursoProcessos();
        System.out.println(
            recursoProcessos.getFkServer()
        );
    }

}
