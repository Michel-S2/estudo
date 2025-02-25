package br.com.javainsider.pet;

public abstract class Pet {
    private String cor;


    public String getCor() {
        return cor;
    }

    public abstract void dormir();


    public void setCor(String cor) {
        this.cor = cor;
    }
}
