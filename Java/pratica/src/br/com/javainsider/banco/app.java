package br.com.javainsider.banco;

public class app {
    public static void main(String[] args) {

        Corrente banco1 = new Corrente(450.0, 0.05);
        System.out.println("Saldo atual: R$" + banco1.getBalance());
        banco1.saldoAtualizado();
        System.out.println(banco1.getBalance());

        System.out.println("---------------------------------------");

        Poupanca banco2 = new Poupanca(450.0, 0.20);
        System.out.println("Saldo atual: R$" + banco2.getBalance());
        banco2.saldoAtualizado();
        System.out.println(banco2.getBalance());

    }
}
