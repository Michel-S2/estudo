package br.com.javainsider.wrappers;

public class AppImpl implements Operacao{
    @Override
    public int executar(Integer n1, Integer n2) {
        return (n1 == null ? 0 : n1) + (n2 == null ? 0 : n2);
    }
}
