package br.com.javainsider.enums;


public class EnumsApp {
    public static void main(String[] args) {

        Operacoes soma = Operacoes.SOMA;
        System.out.println(soma.calcular(1, 9));

        Operacoes multiplicacao = Operacoes.MULTIPLICACAO;
        System.out.println(multiplicacao.calcular(2, 10));

    }
}
