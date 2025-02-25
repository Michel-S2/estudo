package br.com.javainsider.string;

public class StringManipulatorImpl implements StringManipulator, Interface2{


    @Override
    public String join(String texto1, String texto2) {
        return texto1 + texto2;
    }

    @Override
    public String takeFirst(String texto, int numero) {
        return texto.substring(0, numero);
    }

    @Override
    public String upper(String texto) {
        return StringManipulator.super.upper(texto);
    }
}
