"use client"

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Div } from "./components/Div";
import { TemaContextProvider, useTema } from "./context/TemaContext";
import { DarkMode } from './components/DarkMode';
import { Identificacao } from './components/Identificacao';
import { Chat } from './components/Chat';
import { useState } from 'react';

const page = [
  {id: 1, page: 1},
  {id: 2, page: 2}
]

export default function Home() {
  const [paginas, setPaginas] = useState(page[0].page)
  const userValidCtx = useTema();

  const nextPage = () => {
    setPaginas(page[1].page)
  }

console.log(userValidCtx?.userValid)
  return (
    <TemaContextProvider>
      <Div>
          <DarkMode/>
          <h1 className="text-center text-4xl my-4">Chat Simples</h1>
          {paginas === 1 && <Identificacao nextPage={nextPage}/>}
          {paginas === 2 && <Chat/>}
      </Div>
    </TemaContextProvider>
  );
}
