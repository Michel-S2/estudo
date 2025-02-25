package br.com.javainsider.banco;

public abstract class Banco {

    private double saldo;

    public Banco(double saldo) {
        this.saldo = saldo;
    }

    public double getBalance() {
        return saldo;
    }

    public void saldoAtualizado() {
        saldo += saldo * taxa();
    }

    public abstract double taxa();

}
