package br.com.javainsider.login;

public class LoginPadrao implements SystemLogin{
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "123";
//-----------------------------------------------------------------------------

    private String username;
    private String password;

    public LoginPadrao(){
        this(USERNAME, PASSWORD);
    }

    public LoginPadrao(String username, String password){
        this.username = username;
        this.password = password;
    }

//-----------------------------------------------------------------------------

    @Override
    public boolean login(String username, String password) {
        return username.equals(username) && password.equals(password);
    }

}
