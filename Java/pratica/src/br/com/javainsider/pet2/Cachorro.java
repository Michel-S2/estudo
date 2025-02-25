package br.com.javainsider.pet2;

public class Cachorro extends Pet{

    @Override
    public void alimentar() {
        System.out.println("Cachorro está comendo AuAu!");
    }

    public void sentar(){
        System.out.println("Cachorro está sentado!!");
    }
}
