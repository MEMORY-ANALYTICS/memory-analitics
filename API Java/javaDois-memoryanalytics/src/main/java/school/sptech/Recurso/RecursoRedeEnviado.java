package school.sptech.Recurso;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.rede.RedeInterface;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Componentes.Componente;

import java.time.LocalDateTime;
import java.util.List;

public class RecursoRedeEnviado extends Recurso {

    private Looca looca;

    public RecursoRedeEnviado(String nome, String unidadeMedida, Double valorRegistro, Componente componente, Looca looca) {
        super(nome, unidadeMedida, valorRegistro, componente);
        this.looca = looca;
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

    public void queryInsertRegistroRede() {
        LocalDateTime dateTimeAtual = LocalDateTime.now();
        getConexoes().get(0); //SQL Server
        getConexoes().get(1).update("INSERT INTO registro (valorRegistro, tipoMedida, detalheRegistro, dtHoraRegistro, fkComponente) VALUES\n" +
                "(?, 'Mb','Megabytes Eviados', ?, ?);", capturarRegistro(), dateTimeAtual); //MySQL
        setValorRegistro(capturarRegistro());
        getConexoes().get(1); //MySQL
        String macAdress = "";
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