package br.com.javainsider.aula;

public class ExceptionSaldoInsuficiente extends Exception{
    private final double saldoAtual;

    public ExceptionSaldoInsuficiente(double saldoAtual) {
        super("Não há saldo suficiente para saque");
        this.saldoAtual = saldoAtual;
    }

    public double getSaldoAtual() {
        return saldoAtual;
    }
}
