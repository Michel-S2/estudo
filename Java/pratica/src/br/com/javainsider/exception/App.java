package br.com.javainsider.exception;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int numero1 = lerNumero(scanner);
        int numero2 = lerNumero(scanner);

        System.out.println("Resposta: " +(numero1 + numero2));

    }

    public static int lerNumero(Scanner scanner) {
        System.out.print("Digite um número: ");

        try {
            return Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            System.out.println("Formato inválido... Adicionando 10");
            return 10;
        }
    }
}
