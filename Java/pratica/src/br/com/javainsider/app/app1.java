package br.com.javainsider.app;

import br.com.javainsider.account.Account;

public class app1 {
    public static void main(String[] args) {

        var a1 = new Account("Michel");
        var a2 = new Account("Pedro");
        var a3 = new Account("Andressa");

        int id = a1.getCurrentID();
        int newID = Account.getCurrentID();

        System.out.println(id);
        System.out.println(newID);
    }
}
