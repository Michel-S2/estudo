package br.com.javainsider.other;

public class DiaDaSemana {
    public static void main (String[] args) {

        var scanner = new java.util.Scanner(System.in);

        System.out.print("Dia da semana em número: ");

        int dia = Integer.parseInt(scanner.nextLine());

        String diaDaSemana = switch (dia) {
            case 1 -> "Hoje é domingo";
            case 2 -> "Hoje é segunda";
            case 3 -> "Hoje é terça";
            case 4 -> "Hoje é quarta";
            case 5 -> "Hoje é quinta";
            case 6 -> "Hoje é sexta";
            case 7 -> "Hoje é sábado";
            default -> "Dia inválido";
        };

        System.out.println(diaDaSemana);

    }
}


