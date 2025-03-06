package br.com.javainsider.format;

import java.text.NumberFormat;
import java.util.Currency;

public class Item {
    private final String item;
    private final double valor;
    private final NumberFormat valorFormatado;

    public Item(String item, double valor, String moeda) {
        this.item = item;
        this.valor = valor;

        valorFormatado = NumberFormat.getCurrencyInstance();
        valorFormatado.setCurrency(Currency.getInstance(moeda));
    }


    @Override
    public String toString() {


        return String.format("%-15s - %15s", item, valorFormatado.format(valor));
    }
}
