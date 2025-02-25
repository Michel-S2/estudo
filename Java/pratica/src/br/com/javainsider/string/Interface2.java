package br.com.javainsider.string;

public interface Interface2 {

    default String upper(String texto) {
        return "*" + texto.substring(1);
    }

}
