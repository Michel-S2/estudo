package br.com.javainsider.app;

import br.com.javainsider.account.Account;
import br.com.javainsider.account.Poupanca;

public class app1 {
    public static void main(String[] args) {

        var a1 = new Account("Andressa", "1234-5");

        a1.setBalance(3000);
        a1.detalhe();

        var a2 = new Poupanca("Michel", "6666-6");

        a2.setJuros(1.2);
        a2.setBalance(2000);
        a2.detalhe();
    }
}
