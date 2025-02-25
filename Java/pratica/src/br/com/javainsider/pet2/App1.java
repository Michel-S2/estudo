package br.com.javainsider.pet2;

public class App1 {
    public static void main(String[] args) {

        Pet cachorro1 = new Cachorro();

        if (cachorro1 instanceof Cachorro dog1) {

            dog1.sentar();

        } else {
            System.out.println("Tipo não pertence a classe Cachorro");
        }
    }
}
