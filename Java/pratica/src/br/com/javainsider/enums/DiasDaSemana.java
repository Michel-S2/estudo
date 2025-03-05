package br.com.javainsider.enums;

public enum DiasDaSemana {
    DOMINGO(null),
    SABADO(DOMINGO),
    SEXTA(SABADO),
    QUINTA(SEXTA),
    QUARTA(QUINTA),
    TERCA(QUARTA),
    SEGUNDA(TERCA);

    private final DiasDaSemana next;

    DiasDaSemana(DiasDaSemana next) {
        this.next = next;
    }

    public DiasDaSemana next(){
        return this.next == null ? SEGUNDA : this.next;
    }

    public DiasDaSemana getNext() {
        return next;
    }
}
