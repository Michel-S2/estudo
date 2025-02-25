package br.com.javainsider.banco;

public class Poupanca extends Banco{
    private double taxa;

    public Poupanca(double saldo, double taxa) {
        super(saldo);
        this.taxa = taxa;
    }

    @Override
    public double taxa() {
        return taxa;
    }
}
