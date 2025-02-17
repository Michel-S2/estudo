package br.com.javainsider.other;


public class Main {
    public static void main(String[] args){
        var n1 = Number.newNumber(20);
        var n2 = Number.newNumber(10);

        Number n3 = Number.add(n1, n2);

        System.out.println(n3.getNumber());

    }
}