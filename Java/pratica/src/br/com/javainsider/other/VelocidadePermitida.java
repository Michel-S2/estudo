package br.com.javainsider.other;

public class VelocidadePermitida {
    public static void main(String[] args) {

        int velocidadePermitida = 80;
        int velocidadeAtual = 70;
        double multa = 0;

        if (velocidadePermitida <= 100) {

            if (velocidadeAtual > velocidadePermitida) {
                System.out.println("Você está acima da velocidade permitida");
            }

            if (velocidadeAtual  > velocidadePermitida + 7 ) {

                System.out.println("Velocidade: " + velocidadeAtual);

                multa = (velocidadeAtual - velocidadePermitida) * 10;

                System.out.println("Você foi multado em R$ " + multa);

            }
        } else if (velocidadePermitida > 100 ) {

            if (velocidadeAtual > velocidadePermitida) {
                System.out.println("Você está acima da velocidade permitida");
            }

            if (velocidadeAtual > velocidadePermitida * 1.10) {

                multa = (velocidadeAtual - velocidadePermitida) * 10;

                System.out.println("Você foi multado em R$ " + multa);

            }
        }

        System.out.println("Limite de Velocidade: " + velocidadePermitida);
        System.out.println("Velocidade: " + velocidadeAtual);

    }
}
