package br.com.javainsider.pet;

public class Animais {
    public static void main(String[] args) {

        Cachorro cachorro1 = new Cachorro();
        cachorro1.setCor("Caramelo");
        cachorro1.falar();
        cachorro1.andar();

        Gato gato1 = new Gato();
        gato1.setCor("Preto");
        gato1.falar();
        gato1.andar();

        Peixe peixe1 = new Peixe();
        peixe1.setCor("amarelo");
        peixe1.nadar();
    }
}
