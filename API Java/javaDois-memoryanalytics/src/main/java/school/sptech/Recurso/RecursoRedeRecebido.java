package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.BancoDados.Conexao;

import java.util.List;

public class RecursoRedeRecebido extends Recurso{

    private Looca looca;

    public RecursoRedeRecebido(String nome, String unidadeMedida, Double valorRegistro) {
        super(nome, unidadeMedida, valorRegistro);
        this.looca = new Looca();
    }

    @Override
    public Double capturarRegistro() {
        Double bytesEnviados = 0.0;
        for (int i = 0; i < looca.getRede().getGrupoDeInterfaces().getInterfaces().size(); i++) {
            if (looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getBytesRecebidos().describeConstable().isEmpty()){
                bytesEnviados = null;
            }else {
                bytesEnviados = (double) looca.getRede().getGrupoDeInterfaces().getInterfaces().get(i).getBytesRecebidos();
                break;
            }
        }
        return bytesEnviados;
    }

    public void queryInsertRegistroRede(){
        getConexoes().get(0); //SQL Server
        getConexoes().get(1); //MySQL
    }
    @Override
    public List<JdbcTemplate> getConexoes() {
        return super.getConexoes();
    }

    @Override
    public void setConexoes(List<JdbcTemplate> conexoes) {
        super.setConexoes(conexoes);
    }
}
