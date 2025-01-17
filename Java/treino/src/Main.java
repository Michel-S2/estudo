public class Main {
    public static void main(String[] args) {
        //Numeros Inteiros
        byte numero1 = 127; //8 bits -> -128 a 127
        short numero2 = 32000; //16 bits -> -32.768 a 32.767
        int numero3 = 200000000; //32 bits -> -2.147.483.648 a 2.147.483.647
        long numero4 = 90000000L; //64 bits -> -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807

        //Numeros Decimais
        float numero5 = 5.62f; //16 bits
        double numero6 = 10.454545; //64 bits

        //Strings
        String nome = "Michel Freitas";
        char caracter = 'M';

        //Booleans
        boolean isOpen = false;
        boolean isActive = true;

        if(isOpen) {
            System.out.println("Verdadeiro");
        } else {
            System.out.println("Falso");
        }
    }


}