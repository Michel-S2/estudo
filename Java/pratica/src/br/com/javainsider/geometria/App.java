package br.com.javainsider.geometria;

public class App {
    public static void main(String[] args) {

        CalcularFormas calc = new CalcularFormas();

        calc.somarAreas(new CirculoImpl(5));
        calc.somarAreas(new RetanguloImpl(5, 7));
        double resposta = calc.somarAreas(new Quadrado(10));
        System.out.println(resposta);
    }
}
