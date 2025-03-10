package br.com.javainsider.numeros;

import java.util.Random;
import java.util.UUID;

public class App {
    public static void main(String[] args) {

        UUID id = UUID.randomUUID();
        String novoId = id.toString();
        System.out.println(novoId);

    }
}
