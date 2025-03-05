package br.com.javainsider.enums;

public enum Meses {
    JANEIRO(1),
    FEVEREIRO(2),
    MARCO(3),
    ABRIL(4),
    MAIO(5),
    JUNHO(6),
    JULHO(7),
    AGOSTO(8),
    SETEMBRO(9),
    OUTUBRO(10),
    NOVEMBRO(11),
    DEZEMBRO(12);

    private final int numeroMes;

    Meses(int numeroMes) {
        this.numeroMes = numeroMes;
    }

    public int getNumeroMes() {
        return numeroMes;
    }

    public int numeroDias() {
        return switch (this) {
            case JANEIRO, MARCO, JUNHO, OUTUBRO, NOVEMBRO, DEZEMBRO -> 31;
            case FEVEREIRO -> 28;
            case ABRIL, SETEMBRO, MAIO, JULHO, AGOSTO -> 31;
        };

    }
}
