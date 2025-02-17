package br.com.javainsider.other;

public class ValorX {
    public static void main(String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Digite o valor inicial de X: ");
        int x = Integer.parseInt(scanner.nextLine());

        int calculo;

        if (x % 2 == 0) {
            calculo = x + 5;
        } else {
            calculo = x * 2;
        }

        System.out.println("O novo valor de X é: " + calculo);
    }
}
