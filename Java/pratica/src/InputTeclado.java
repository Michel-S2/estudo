public class InputTeclado {

    public static void main(String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Digite seu nome: ");

        String nome = scanner.nextLine();

        System.out.println("Muito prazer " + nome );

    }
}
