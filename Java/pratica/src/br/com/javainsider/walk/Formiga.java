package br.com.javainsider.walk;

public class Formiga implements Walkable{
    private int distanciaTotal = 100;

    @Override
    public void walk() {
        distanciaTotal -= 10;
    }

    @Override
    public void stop() {
        distanciaTotal = 100;
    }
}
