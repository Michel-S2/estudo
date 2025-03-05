package br.com.javainsider.enums;

public class Car {

    public enum Modelo {
        GOL, SANDERO, UNO, SANTANA, PALIO
    }

    private final Modelo modelo;

    public Car(Modelo modelo) {
        this.modelo = modelo;
    }

    public Modelo getModelo() {
        return modelo;
    }
}
