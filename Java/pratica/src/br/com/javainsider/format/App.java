package br.com.javainsider.format;

import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Currency;
import java.util.Locale;

public class App {
    public static void main(String[] args) {

        Item item1 = new Item("Mouse", 32.50, "BRL");
        Item item2 = new Item("Carro", 4600.50, "EUR");
        Item item3 = new Item("Teclado", 15.50, "USD");
        Item item4 = new Item("Bicicleta", 889.99, "BRL");
        System.out.println(item1);
        System.out.println(item2);
        System.out.println(item3);
        System.out.println(item4);
    }
}
