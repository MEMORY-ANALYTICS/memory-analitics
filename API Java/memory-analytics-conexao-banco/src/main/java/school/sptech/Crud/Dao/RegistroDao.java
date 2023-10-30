package school.sptech.Crud.Dao;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.rede.Rede;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import school.sptech.Crud.Recurso;
import school.sptech.Crud.Registro;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class RegistroDao {
    private JdbcTemplate con;
    private List<Disco> discos = new ArrayList<>();
    public RegistroDao(JdbcTemplate con) {
        this.con = con;
    }

    public List<Registro> selectAllRegistros(){
        return con.query("SELECT * FROM registro;",
        new BeanPropertyRowMapper<>(Registro.class));
    }

    public List<Registro> selectAllRegistrosCpu(){
        System.out.println("Registro de CPU");

        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'CPU'",
                new BeanPropertyRowMapper<>(Registro.class)
                );
    }
    public List<Registro> selectAllRegistroDisco(){
        System.out.println("Registro de DISCO");
        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'DISCO'",
                new BeanPropertyRowMapper<>(Registro.class)
        );

    }

    public List<Registro> selectAllRegistroRam(){
        System.out.println("Registro de RAM");
        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'RAM'",
                new BeanPropertyRowMapper<>(Registro.class)
        );

    }

    public List<Registro> selectAllRegistroRede(){
        System.out.println("Registro de REDE");
        return con.query("SELECT dtHoraRegistro, valorRegistro, fkMedidaComponente, tipoRecurso FROM registro " +
                        "JOIN recurso ON fkRecurso = idRecurso JOIN Componente on fkComponente =" +
                        " idComponente JOIN Servidor ON fkServidor = idServidor where fkEmpresa = 10001 " +
                        "AND tipoComponente = 'REDE'",
                new BeanPropertyRowMapper<>(Registro.class)
        );

    }
    //Select nos recursos da memory analytics para pegar o id e adicionar a uma lista, depois
    //adicionar os registros de cada recurso com um for().

    //-------------------------------------------------------------------------------------------------
    public void adicionarRegistroCpuFrquencia(Integer fkRecurso){
        Looca looca = new Looca();
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        Double valorBruto = looca.getProcessador().getFrequencia() / Math.pow(10, 9);
        String valorFormatado = ("%.2f".formatted(valorBruto));

       con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
               valorFormatado, dataHoraAtual, fkRecurso, 2);
    }
    public void adicionarRegistroCpuPorcentagem(Integer fkRecurso){
        Looca looca = new Looca();
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        String valorFormatado = ("%.2f".formatted(looca.getProcessador().getUso()));

        con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                valorFormatado, dataHoraAtual, fkRecurso, 3);
    }
    public void adicionarRegistroDisco(Integer fkRecurso){
        Looca looca = new Looca();
        LocalDateTime dataHoraAtual = LocalDateTime.now();

        //List<Disco> discos = new ArrayList<>();
        //discos.addAll(looca.getGrupoDeDiscos().getDiscos());

        double valorUsoParticao = 0.0;
        String valorFormatadoUsoDiscoGb = "";
        String valorFormatadoUsoDisco = "";
        //for (Disco disco:discos){
            //GB em Uso
            //valorUsoParticao = disco.getBytesDeEscritas() + disco.getBytesDeLeitura();
            valorUsoParticao = looca.getGrupoDeDiscos().getDiscos().get(0).getBytesDeEscritas() + looca.getGrupoDeDiscos().getDiscos().get(0).getBytesDeLeitura();
            valorUsoParticao = valorUsoParticao / Math.pow(10, 9);
            valorFormatadoUsoDiscoGb = ("%.2f".formatted(valorUsoParticao));

            con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                         valorFormatadoUsoDiscoGb, dataHoraAtual, fkRecurso, 1);

            //Porcentagem
            valorUsoParticao = valorUsoParticao*100/ looca.getGrupoDeDiscos().getDiscos().get(0).getTamanho();
            valorFormatadoUsoDisco = ("%.2f".formatted(valorUsoParticao));
            con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                    valorFormatadoUsoDisco, dataHoraAtual, fkRecurso, 3);
        //}
    }
    public void adicionarRegistroRam(Integer fkRecurso){
        Looca looca = new Looca();
        LocalDateTime dataHoraAtual = LocalDateTime.now();
        Double valorBrutoEmGb = looca.getMemoria().getEmUso()/ Math.pow(10, 9);
        String valorFormatado = ("%.2f".formatted(valorBrutoEmGb));

        // Em GB
        con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                valorFormatado, dataHoraAtual, fkRecurso, 1);

        //Em porcentagem -> em processo
        Double valorUso = looca.getMemoria().getEmUso()/ Math.pow(10, 9);
        double totalRam = looca.getMemoria().getTotal()/ Math.pow(10, 9);
        valorUso = valorUso*100;
        Double porcentagemUso = valorUso/totalRam;
        String valorFormatadoPorcentagemRam = ("%.2f".formatted(porcentagemUso));
        //System.out.println(valorFormatadoPorcentagemRam);

        con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                valorFormatadoPorcentagemRam, dataHoraAtual, fkRecurso, 3);
    }

    public void adicionarRegistroRede(Integer fkRecurso){
        Looca looca = new Looca();
        LocalDateTime dataHoraAtual = LocalDateTime.now();

        //List<Rede> redes = new ArrayList<>();
        //redes.addAll(looca.getRede().getGrupoDeInterfaces().getInterfaces().);

        Double valorBrutoEmMbpsE = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getBytesEnviados()/ Math.pow(10, 6);
        String valorFormatadoE = ("%.2f".formatted(valorBrutoEmMbpsE));

        con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                valorFormatadoE, dataHoraAtual, fkRecurso, 4);

        Double valorBrutoEmMbpsR = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getBytesRecebidos()/ Math.pow(10, 6);
        String valorFormatadoR = ("%.2f".formatted(valorBrutoEmMbpsR));

        con.update("INSERT INTO registro (valorRegistro, dtHoraRegistro, fkRecurso, fkMedidaComponente) VALUES (?, ?, ?, ?)",
                valorFormatadoR, dataHoraAtual, fkRecurso, 7);
    }
}
