package school.sptech.Registro;


import com.github.britooo.looca.api.group.temperatura.Temperatura;

public class RegistroTemperatura extends Registro {

    private Double valor;

    public RegistroTemperatura() {
        Temperatura temperatura = new Temperatura();
        this.valor = temperatura.getTemperatura();
    }
    public Double getValor() {
        return valor;
    }
}
