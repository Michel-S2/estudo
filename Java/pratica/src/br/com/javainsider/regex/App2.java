package br.com.javainsider.regex;

import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class App2 {
    public static void main(String[] args) {

        Photo foto1 = Photo.criarNomeFoto("IMG_00013-2017-Porto_Alegre.jpg");
        Photo foto2 = Photo.criarNomeFoto("IMG_00012-2024-Eldorado_do_Sul.jpg");
        Photo foto3 = Photo.criarNomeFoto("IMG_345-2022-Rio_de_Janeiro.jpg");

        System.out.println(foto1);
        System.out.println(foto2);
        System.out.println(foto3);
    }

}
