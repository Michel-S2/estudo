"use client"

import Image from "next/image";
import { ThemeProvider } from "./context/ThemeContext";
import { Container } from "./components/Container";
import { Button } from "./context/Button";
import { ThemeSwitch } from "./context/ThemeSwitch";

export default function Home() {
  return (
    <ThemeProvider>
        <Container>
          <header className="py-6">
            <h1 className="text-3xl">Titulo da pagina</h1>
          </header>
          <section>
            <p className="my-5">Conteudo da página</p>
            <Button label="Clique aqui" onClick={() => {}}/>
          </section>
          <ThemeSwitch/>
        </Container>
    </ThemeProvider>
  );
}
