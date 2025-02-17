package br.com.javainsider.other;

public class GrausCelsius {

    public static void main(String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Temperatura em °F: ");
        double fahrenheit = Double.parseDouble(scanner.nextLine());

        double celsius = ((fahrenheit - 32) / 9 ) * 5;

        System.out.println("Temperatura em graus celsius: " + celsius);

    }

}
