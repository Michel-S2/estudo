package br.com.javainsider.numeros;

import java.util.Random;

public class Dados {
    private final Random random = new Random();


    public Numeros rolar(){
        return new Numeros(nextNumber(), nextNumber());
    }

    public int nextNumber(){
        return random.nextInt(1, 7);
    }

}
