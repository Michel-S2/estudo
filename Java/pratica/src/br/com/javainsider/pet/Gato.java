package br.com.javainsider.pet;

public class Gato extends AnimalTerrestre{

    @Override
    public void falar() {
        System.out.println("MiauMiau!!!");
    }

    @Override
    public void dormir() {
        System.out.println("Gato Está Dormindo");
    }
}
