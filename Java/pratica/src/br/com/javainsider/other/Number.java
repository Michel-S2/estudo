package br.com.javainsider.other;

public class Number {
    private int number;
    private static int instance;

    private Number(int number) {
        this.number = number;
        instance++;
    }


    public int getNumber() {
        return number;
    }

    public static Number add(Number n1, Number n2){
        return new Number(n1.getNumber() + n2.getNumber());
    }

    public static Number newNumber(int n) {
        return new Number(n);
    }


}
