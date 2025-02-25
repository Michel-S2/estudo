package br.com.javainsider.aula;

public class Exemplo {
    public static void main(String[] args) {

        PersonRecord personRecord = new PersonRecord("Michel", "Freitas", 22);

        PersonRecord personRecord2 = new PersonRecord(null, "Freitas", 22);

        System.out.println(personRecord.toString());

        System.out.println(personRecord.equals(personRecord2));
    }
}
