package br.com.javainsider.aula;

public enum MeusAnimais implements Pet{
    CACHORRO {
        @Override
        public String falar() {
            return "AuAu!!";
        }
    },
    GATO {
        @Override
        public String falar() {
            return "Miau!!";
        }
    },
}
