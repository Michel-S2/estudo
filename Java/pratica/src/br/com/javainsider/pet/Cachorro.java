package br.com.javainsider.pet;

public class Cachorro extends AnimalTerrestre{

    @Override
    public void falar() {
        System.out.println("AuAuAu!!!");
    }

    @Override
    public void dormir() {
        System.out.println("Cachorro Está Dormindo");
    }
}
