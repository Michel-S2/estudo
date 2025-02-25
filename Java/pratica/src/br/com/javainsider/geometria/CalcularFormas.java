package br.com.javainsider.geometria;

public class CalcularFormas {
    private double total;

    public double somarAreas(BaseGeometrica baseGeometrica){
        total += baseGeometrica.calcularArea();
        return total;
    }

}
