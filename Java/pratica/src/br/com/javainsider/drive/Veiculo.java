package br.com.javainsider.drive;

public sealed abstract class Veiculo permits Car, Bus{
    public abstract void drive();
}
