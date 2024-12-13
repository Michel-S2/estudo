"use client"

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Div } from "./components/Div";
import { TemaContextProvider } from "./context/TemaContext";
import { DarkMode } from './components/DarkMode';


export default function Home() {

  return (
    <TemaContextProvider>
      <Div>
        <header className="flex justify-between py-5">
          <h1>Michel freitas</h1>
          <nav>
            <ul className="flex gap-3">
              <li>Home</li>
              <li>Projetos</li>
              <li>Contato</li>
              <li>Sobre</li>
            </ul>
            <DarkMode/>
          </nav>
        </header>
        <section>
          <h2>Olá mundo</h2>
        </section>
      </Div>
    </TemaContextProvider>
  );
}
