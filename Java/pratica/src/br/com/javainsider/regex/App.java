package br.com.javainsider.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class App {
    public static void main(String[] args) {

        procurarPadrao("qwe34yll66lki907j", "\\d([a-z])+");

    }

    private static void procurarPadrao(String text, String regex) {

        Pattern pattern = Pattern.compile(regex);

        Matcher matcher = pattern.matcher(text);

        while (matcher.find()){
            System.out.format("%d -> %s\n", matcher.start(), matcher.group());
        }
    }
}
