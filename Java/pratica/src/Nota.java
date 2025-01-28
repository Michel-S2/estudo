public class Nota {
    public static void main(String[] args){

        int i = 1;
        double notas = 0.0;
        double media = 0;

        var scanner = new java.util.Scanner(System.in);

        System.out.println();
        System.out.println("Digite as notas:");
        System.out.println("===================================================");

        while (true) {
            System.out.print("Digite a nota " + i + ": ");

            String line = scanner.nextLine();

            if(line.equals("")) {
                i--;
                break;
            }

            notas += Double.parseDouble(line);
            i++;
        }

        media = notas / i;
        System.out.println("Média: " + media);

    }
}
