package br.com.javainsider.aula;

import java.util.Objects;
import java.util.Scanner;

public class Exemplo {

    public static void main(String[] args)  {

        falar(MeusAnimais.CACHORRO);
        falar(MeusAnimais.GATO);

    }

    private static void falar(Pet objeto) {
        System.out.println(objeto.falar());
    }
}

