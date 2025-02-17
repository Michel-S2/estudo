package br.com.javainsider.other;

public class Lampada {
    private boolean on;

    public Lampada(boolean on) {
        this.on = on;
    }

    public void turnOn() {
        on = true;
        showState();
    }

   public void turnOf() {
        on = false;
        showState();
    }

    public void showState() {
         System.out.println("Lâmpada"  + (on ? "Ligada" : "Desligada"));
    }

}
