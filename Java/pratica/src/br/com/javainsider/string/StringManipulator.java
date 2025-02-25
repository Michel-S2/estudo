package br.com.javainsider.string;

public interface StringManipulator {

    String join(String texto1, String texto2);

    String takeFirst(String texto, int numero);

    default String upper(String texto){
        return texto.toUpperCase();
    }

}
