package br.com.javainsider.wrappers;

public class Exercicio {
    private final Integer numero;

    public Exercicio(Integer numero) {
        this.numero = numero;
    }

    public Integer getNumero() {
        return numero;
    }

    @Override
    public String toString() {
        return "Exercicio{" +
                "numero=" + numero +
                '}';
    }
}
