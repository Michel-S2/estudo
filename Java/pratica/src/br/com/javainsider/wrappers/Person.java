package br.com.javainsider.wrappers;

public class Person {
    private final Integer idade;
    private final Double peso;

    public Person(Integer idade, Double peso) {
        this.idade = idade;
        this.peso = peso;
    }

    public Integer getIdade() {
        return idade;
    }

    public Double getPeso() {
        return peso;
    }

    @Override
    public String toString() {
        return "Person{" +
                "idade=" + idade +
                ", peso=" + peso +
                '}';
    }
}
