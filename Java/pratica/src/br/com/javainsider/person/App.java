package br.com.javainsider.person;

public class App {
    public static void main(String[] args) {

        Generator numeroSequencial = new SequenceGeneratorImpl();

        Person p1 = new Person(numeroSequencial);
        System.out.println(p1.getId());

        Person p2 = new Person(numeroSequencial);
        System.out.println(p2.getId());
    }
}
