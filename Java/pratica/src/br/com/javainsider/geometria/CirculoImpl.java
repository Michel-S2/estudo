package br.com.javainsider.geometria;

public class CirculoImpl implements BaseGeometrica{
    private double raio;


    public CirculoImpl(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * (raio * raio);
    }
}
