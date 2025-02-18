package br.com.javainsider.account;

public class Account {
    private final String accountNumber;
    private final String accountName;
    protected double balance;


    public Account( String accountName, String accountNumber) {
        this.balance = 0;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
    }


    public boolean deposito(double valor) {
        if (valor > 0 ) {
            balance += valor;
            return true;
        }
        return false;
    }


    public boolean saque(double valor) {
        if (valor > 0) {
            balance -= valor;
            return true;
        }

        return false;
    }

    public void transferir(double valor, Account contaDestino) {
        saque(valor);
        contaDestino.deposito(valor);
    }

    public void mostrarSaldo() {
        System.out.println("R$ " + balance);
    }

    public void detalhe() {
        System.out.println("Nome: " + accountName + "\n" +
                           "Numero: " + accountNumber + "\n" +
                           "Saldo: " + balance);
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNumber='" + accountNumber + '\'' +
                ", accountName='" + accountName + '\'' +
                ", balance=" + balance +
                '}';
    }

    public String getAccountName() {
        return accountName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
