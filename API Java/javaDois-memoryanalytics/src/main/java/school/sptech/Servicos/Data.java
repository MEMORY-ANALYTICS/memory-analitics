package school.sptech.Servicos;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Data {

    public static String formatarParaMySQL(LocalDateTime dataHora) {
        // Formato para MySQL: "yyyy-MM-dd HH:mm:ss"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return dataHora.format(formatter);
    }

    public static String formatarParaSQLServer(LocalDateTime dataHora) {
        // Formato para SQL Server: "yyyy-MM-dd HH:mm:ss.SSS"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        return dataHora.format(formatter);
    }

    public static void main(String[] args) {
        // Exemplo de uso
        LocalDateTime dataHoraAtual = LocalDateTime.now();

        // Formatar para MySQL
        String formatoMySQL = formatarParaMySQL(dataHoraAtual);
        System.out.println("Formato MySQL: " + formatoMySQL);

        // Formatar para SQL Server
        String formatoSQLServer = formatarParaSQLServer(dataHoraAtual);
        System.out.println("Formato SQL Server: " + formatoSQLServer);
    }
}