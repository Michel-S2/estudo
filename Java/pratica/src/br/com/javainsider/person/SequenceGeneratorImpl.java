package br.com.javainsider.person;

public class SequenceGeneratorImpl implements Generator{

    private int current;

    @Override
    public int next() {
        return ++current;
    }
}
