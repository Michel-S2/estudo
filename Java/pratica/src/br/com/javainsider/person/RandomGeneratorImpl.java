package br.com.javainsider.person;

import java.util.Random;

public class RandomGeneratorImpl implements Generator {

    private final Random numeroAleatorio = new Random();

    @Override
    public int next() {
        return numeroAleatorio.nextInt(1, 10);
    }
}
