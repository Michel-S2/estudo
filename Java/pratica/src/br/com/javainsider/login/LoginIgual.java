package br.com.javainsider.login;

public class LoginIgual implements SystemLogin{


    @Override
    public boolean login(String username, String password) {
        return username.equals(password);
    }
}
