package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
<<<<<<< HEAD
import com.github.britooo.looca.api.group.rede.RedeInterface;
=======
>>>>>>> d0d9b29c0aa622361323a3e8209646746ae41f53
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.Conexao;
import school.sptech.BancoDados.ConexaoMySql;
import school.sptech.BancoDados.ConexaoSqlServer;

import java.util.ArrayList;
import java.util.List;

public class RecursoRedeEnviado extends Recurso {

    private Looca looca;

    public RecursoRedeEnviado(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro);
        this.looca = new Looca();
    }

    @Override
    public Double capturarRegistro() {
        List<RedeInterface> listaBytesEnviados = looca.getRede().getGrupoDeInterfaces().getInterfaces();
        Long bytesEnviadosInterface = 0L;
        Double megabytesEnviados = 0.0;

        for (int i = 0; i < listaBytesEnviados.size(); i++) {
            bytesEnviadosInterface += listaBytesEnviados.get(i).getBytesEnviados();
            megabytesEnviados += bytesEnviadosInterface * Math.pow(10, -6);
            break;
        }

        return megabytesEnviados;
    }

    public void querySelectIdComponente(){
        getConexoes().get(0); //SQL Server
<<<<<<< HEAD
        getConexoes().get(1).update("SELECT idComponente FROM componete WHERE tipoComponente = 'REDE';"); //MySQL
    }

    public void queryInsertRegistroRede() {
        getConexoes().get(0); //SQL Server
        getConexoes().get(1).update("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES\n" +
                "(?, 'Mb','Megabytes Eviados', ?, ?);"); //MySQL
        setValorRegistro(capturarRegistro());
=======
        getConexoes().get(1); //MySQL
        String macAdress = "";
        for (int i = 0; i < looca.getRede().getGrupoDeInterfaces().getInterfaces().size(); i++) {
            if (looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac().isBlank()){
                macAdress = "Não encontrado";
            }else {
                macAdress = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getEnderecoMac();
                break;
            }
        }
    }
    @Override
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public void setConexoes(List<JdbcTemplate> conexoes) {
        super.setConexoes(conexoes);
>>>>>>> d0d9b29c0aa622361323a3e8209646746ae41f53
    }

}