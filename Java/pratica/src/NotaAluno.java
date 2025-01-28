public class NotaAluno {
    public static void main(String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Digite a primeira nota: ");
        String nota1 = scanner.nextLine();

        System.out.print("Digite a segunda nota: ");
        String nota2 = scanner.nextLine();

        System.out.print("Digite a terceira nota: ");
        String nota3 = scanner.nextLine();

        double media = (Double.parseDouble(nota1) + Double.parseDouble(nota2) + Double.parseDouble(nota3)) / 3;

        System.out.println("Média: " + media);

    }

}
