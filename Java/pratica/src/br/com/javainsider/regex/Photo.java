package br.com.javainsider.regex;

import java.util.Scanner;

public class Photo {
    private final int sequencia;
    private final int ano;
    private final String cidade;

    public Photo(int sequencia, int ano, String cidade) {
        this.sequencia = sequencia;
        this.ano = ano;
        this.cidade = cidade;
    }

    public int getSequencia() {
        return sequencia;
    }

    public int getAno() {
        return ano;
    }

    public String getCidade() {
        return cidade;
    }

    @Override
    public String toString() {
        return "Photo{" +
                "sequencia=" + sequencia +
                ", ano=" + ano +
                ", cidade='" + cidade + '\'' +
                '}';
    }

    public static Photo criarNomeFoto(String nomeFoto) {
        // -> IMG_00013-2017-Porto_Alegre.jpg

        Scanner scanner = new Scanner(nomeFoto);
        scanner.useDelimiter("[-.]");

        int primeiraSequencia = Integer.parseInt(scanner.next().replaceAll("[^0-9]", ""));

        int ano = scanner.nextInt();

        String cidade = scanner.next().replaceAll("_", " ");

        return new Photo(primeiraSequencia, ano, cidade);
    }
}
