package school.sptech.Hardware;

import com.github.britooo.looca.api.core.Looca;

public class RedeInterface {
    private String nome;
    private String nomeExibicao;
    private String enderecoIpv4;
    private String enderecoIpv6;
    private String enderecoMac;
    private Long bytesRecebidos;
    private Long bytesEnviados;
    private Long pacotesRecebidos;
    private Long pacotesEnviados;

    public RedeInterface() {
        Looca looca  = new Looca();
        this.nome = looca.getRede().getGrupoDeInterfaces().getInterfaces().get(0).getNome();
        this.nomeExibicao = nomeExibicao;
        this.enderecoIpv4 = enderecoIpv4;
        this.enderecoIpv6 = enderecoIpv6;
        this.enderecoMac = enderecoMac;
        this.bytesRecebidos = bytesRecebidos;
        this.bytesEnviados = bytesEnviados;
        this.pacotesRecebidos = pacotesRecebidos;
        this.pacotesEnviados = pacotesEnviados;
    }

    @Override
    public String toString() {
        return "Rede{" +
                "nome='" + nome + '\'' +
                ", nomeExibicao='" + nomeExibicao + '\'' +
                ", enderecoIpv4='" + enderecoIpv4 + '\'' +
                ", enderecoIpv6='" + enderecoIpv6 + '\'' +
                ", enderecoMac='" + enderecoMac + '\'' +
                ", bytesRecebidos=" + bytesRecebidos +
                ", bytesEnviados=" + bytesEnviados +
                ", pacotesRecebidos=" + pacotesRecebidos +
                ", pacotesEnviados=" + pacotesEnviados +
                '}';
    }
}
