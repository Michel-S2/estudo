public class Tabuada {
    public static void main(String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Tabuada do: ");
        int tabuada = Integer.parseInt(scanner.nextLine());

        System.out.println("==============================");

        for (int i = 1; i <= 10; i++) {

            System.out.println(tabuada + " X " + i + " = " + (tabuada * i));

        }


    }
}
