package br.com.javainsider.format;

public class Account {
    private final String numeroConta;
    private final String nomeConta;
    private final double saldoConta;

    public Account(String numeroConta, String nomeConta, double saldoConta) {
        this.numeroConta = numeroConta;
        this.nomeConta = nomeConta;
        this.saldoConta = saldoConta;
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public String getNomeConta() {
        return nomeConta;
    }

    public double getSaldoConta() {
        return saldoConta;
    }

    @Override
    public String toString() {
        return String.format("%11s\t\t%-20s\t%.2f", numeroConta, nomeConta, saldoConta);
    }
}
