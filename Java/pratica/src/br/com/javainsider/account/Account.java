package br.com.javainsider.account;

public class Account {
    private final String accountNumber;
    private final String accountName;
    private double balance;

    public static final int INITIAL_VALUE = 10;

    private static int currentID;

    static {
        System.out.println("Iniciando o bloco estático");

        currentID = INITIAL_VALUE;

    }

    public Account( String accountName) {
        this.balance = 0;
        this.accountName = accountName;
        this.accountNumber = "000" + currentID++;
    }


    boolean deposito(double valor) {
        if (valor > 0 ) {
            balance += valor;
            return true;
        }
        return false;
    }

    boolean deposito(String valor) {
        return deposito(Double.parseDouble(valor));
    }

    boolean saque(double valor) {
        if (valor > 0) {
            balance -= valor;
            return true;
        }

        return false;
    }

    void transferir(double valor, Account contaDestino) {
        saque(valor);
        contaDestino.deposito(valor);
    }

    void mostrarSaldo() {
        System.out.println("R$ " + balance);
    }

    public String getAccountName() {
        return accountName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public static int getCurrentID() {
        return currentID;
    }
}
