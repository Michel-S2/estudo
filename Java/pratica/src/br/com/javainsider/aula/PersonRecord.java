package br.com.javainsider.aula;

import java.util.Objects;

public record PersonRecord(String nome, String sobrenome, int idade) {

    private static final int IDADE_PADRAO = 0;

    public  PersonRecord {
        Objects.requireNonNull(nome, "Não pode ser nulo");
        Objects.requireNonNull(sobrenome, "Não pode ser nulo");
    }

    public PersonRecord(String nome, String sobrenome){
        this(nome, sobrenome, IDADE_PADRAO);
        System.out.println("Pessoa record criada");
    }


    public String fullName() {
        return nome + " " + sobrenome;
    }

    public static PersonRecord create(String name){
        return new PersonRecord(name, "");
    }


}
