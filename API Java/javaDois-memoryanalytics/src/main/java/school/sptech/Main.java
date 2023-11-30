package school.sptech;

import school.sptech.Recurso.RecursoProcessos;
import school.sptech.Recurso.RecursoTemperatura;

public class Main {
    public static void main(String[] args) {


//        ConexaoMySql mysql = new ConexaoMySql();
//    JdbcTemplate con = mysql.criarConexao();
//    List<Servidor> l1 = con.query("select * from servidor",new BeanPropertyRowMapper<>(Servidor.class));
//   System.out.println(l1);
        RecursoProcessos processos = new RecursoProcessos();
//        System.out.println(
//            processos.quantidadeProcessosOnline()
//        );
//
//        System.out.println(
//            processos.getAllNomesProcessos()
//        );
//        while(true){
//            System.out.println(
//                    processos.getProcessoMaiorUsoCpu()
//            );
            System.out.println(
                    processos.getUsoCpuProcessos()
            );
//        }

//processos.listarTodosProcessos();


    }




}