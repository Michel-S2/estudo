package br.com.javainsider.string;

public class Strings {
    public static void main(String[] args) {

        StringManipulatorImpl exemplo1 = new StringManipulatorImpl();
        System.out.println(exemplo1.join("mich", "el"));
        System.out.println(exemplo1.takeFirst("michel", 2));
        System.out.println(exemplo1.upper("michel"));
    }
}
