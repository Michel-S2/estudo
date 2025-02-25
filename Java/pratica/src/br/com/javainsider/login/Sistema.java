package br.com.javainsider.login;

public class Sistema {
    public static void main(String[] args){

        LoginPadrao login1 = new LoginPadrao();
        boolean acesso = login1.login("admin", "123");
        System.out.println(acesso);

        LoginIgual login2 = new LoginIgual();
        boolean acesso2 = login2.login("admin", "admin");
        System.out.println(acesso2);
//----------------------------------------------------------------------------------------

        LoginPadrao login3 = new LoginPadrao("usuario", "1234");
        boolean acesso3 = login3.login("usuario", "1234");
        System.out.println(acesso3);

//----------------------------------------------------------------------------------------

    }
}
