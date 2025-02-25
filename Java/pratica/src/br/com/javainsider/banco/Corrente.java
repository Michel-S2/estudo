package br.com.javainsider.banco;

public class Corrente extends Banco {
    private double taxa;

    public Corrente(double saldo, double taxa) {
        super(saldo);
        this.taxa = taxa;
    }


    @Override
    public double taxa() {
        return taxa;
    }
}
