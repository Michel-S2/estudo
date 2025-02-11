public class LampadaApp {
    public static void main(String[] args) {

        final var lampada1 = new Lampada(true);
        lampada1.showState();

        lampada1.turnOf();

    }
}
