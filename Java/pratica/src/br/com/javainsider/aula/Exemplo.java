package br.com.javainsider.aula;

public class Exemplo {
    public static void main(String[] args) throws Exception {

        Account conta1 = new Account("1234-5");

        conta1.deposito(500);
        System.out.println(conta1);

        conta1.sacar(-100);
        System.out.println(conta1);

    }
}
