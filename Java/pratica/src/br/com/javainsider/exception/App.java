package br.com.javainsider.exception;

public class App {
    public static void main(String[] args) {

        Veiculo carro1 = new Veiculo(40);
        System.out.println(carro1.getVelocidade());

        System.out.println("Acelerando");
        carro1.acelerar();
        System.out.println(carro1.getVelocidade());

        System.out.println("Acelerando");
        carro1.acelerar();
        System.out.println(carro1.getVelocidade());

        carro1.acelerar();
        System.out.println(carro1.getVelocidade());

    }
}
