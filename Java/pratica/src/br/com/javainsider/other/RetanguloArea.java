package br.com.javainsider.other;

public class RetanguloArea {
    public static void main(String[] args) {

        final var retangulo1 = new Retangulo(20, 10);
        retangulo1.square();

        final var retanguloEquilateral = new Retangulo(10);
        retanguloEquilateral.square();

    }
}
