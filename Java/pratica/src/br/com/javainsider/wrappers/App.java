package br.com.javainsider.wrappers;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {

        int numero = perguntarNumero();

        System.out.println("decimal: " + numero);
        System.out.println("binário: " + Integer.toBinaryString(numero));
        System.out.println("hexadecimal: " + Integer.toHexString(numero));
        System.out.println("octal: " + Integer.toOctalString(numero));

    }

    private static int perguntarNumero() {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            try {
                System.out.print("Digite um numero: ");

                return Integer.parseInt(scanner.nextLine());
                //Retornamos um int
            } catch (NumberFormatException ignored) {
            }
        }
    }
}
