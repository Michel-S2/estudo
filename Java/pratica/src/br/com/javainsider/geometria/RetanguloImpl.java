package br.com.javainsider.geometria;

public class RetanguloImpl implements BaseGeometrica{
    private final double altura;
    private final double largura;

    public RetanguloImpl(double altura, double largura) {

        this.altura = altura;
        this.largura = largura;

    }

    @Override
    public double calcularArea() {
        return largura * altura;
    }
}
