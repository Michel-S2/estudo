package br.com.javainsider.exception;

public class Veiculo {
    private  int velocidade;

    public Veiculo(int velocidade) {
        this.velocidade = velocidade;
    }

    public void acelerar() {
        velocidade += velocidade;

        if (velocidade > 200 ) {
            throw new ExceptionVelocidadeErro("Velocidade acima de 200");
        }
    }

    public int getVelocidade() {
        return velocidade;
    }

}
