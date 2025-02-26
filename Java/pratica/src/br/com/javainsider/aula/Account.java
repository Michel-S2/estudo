package br.com.javainsider.aula;

public class Account {
    private final String numero;
    private double saldo;

    public Account(String numero) {
        this.numero = numero;
    }

    public void deposito(double valor) {
        this.saldo += valor;
    }

    public void sacar(double valor) throws ExceptionSaldoInsuficiente{
        if(valor < 0) {
            throw new RuntimeException("Valor não pode ser negativo");
            //Tratando erro
        }

        if(saldo - valor < 0){
            throw new ExceptionSaldoInsuficiente(saldo);
            //Tratando erro
        }

        this.saldo -= valor;
    }

    @Override
    public String toString() {
        return "Account{" +
                "numero='" + numero + '\'' +
                ", saldo=" + saldo +
                '}';
    }
}
