package br.com.javainsider.account;

public class Poupanca extends Account {
    private double juros;

    public Poupanca(String accountName, String accountNumber) {
        super(accountName, accountNumber);
    }

    public void setJuros(double juros) {
        this.juros = juros;
    }

    @Override
    public void setBalance(double balance) {
        this.balance = balance * juros;
    }

    @Override
    public void detalhe() {
        super.detalhe();
        System.out.println("Juros: " + juros);
    }
}
