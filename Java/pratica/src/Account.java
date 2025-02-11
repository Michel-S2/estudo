public class Account {
    private  String accountNumber;
    private  String accountName;
    private double balance;


    public Account( String accountNumber, String accountName, double balance) {
        this.balance = balance;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
    }

    public Account(String accountNumber) {
        this(accountNumber, null, 0);
    }

    public Account(String accountNumber, double balance) {
        this(accountNumber,  null, 0);
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

    public void setAccountName(String accountName) {
        if (!accountName.isBlank()) {
            this.accountName = accountName;
        }
    }

}
