package br.com.javainsider.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class App2 {
    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("\\w*\\s\\w*");
        Matcher matcher = pattern.matcher("abc ac");

        System.out.println(matcher.matches());

        System.out.println("1234".matches("\\d+"));
    }
}
