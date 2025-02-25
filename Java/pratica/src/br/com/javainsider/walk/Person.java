package br.com.javainsider.walk;

public class Person implements Walkable, Jumpable {
    private int passos;
    private int distanciaPorPassos;


    @Override
    public void walk() {
        passos++;
        distanciaPorPassos += 10;
    }

    @Override
    public void stop() {
        passos = 0;
    }

    @Override
    public void jump() {
        walk();
        walk();
    }
}
