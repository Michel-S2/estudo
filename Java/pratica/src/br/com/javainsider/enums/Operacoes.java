package br.com.javainsider.enums;

public enum Operacoes implements OperacaoInterface {
    SOMA('+') {
        @Override
        public double calcular(double n1, double n2) {
            return n1 + n2;
        }
    },
    SUBTRACAO('-') {
        @Override
        public double calcular(double n1, double n2) {
            return n1 - n2;
        }
    },
    MULTIPLICACAO('*') {
        @Override
        public double calcular(double n1, double n2) {
            return n1 * n2;
        }
    },
    DIVISAO('/') {
        @Override
        public double calcular(double n1, double n2) {
            return n1 / n2;
        }
    };

    private final char simbolo;

    Operacoes(char simbolo) {
        this.simbolo = simbolo;
    }

    @Override
    public String toString() {
        return String.valueOf(simbolo);
    }
}
