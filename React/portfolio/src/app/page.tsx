"use client"

import { Header } from "@/components/Header";
import { Sobre } from "@/components/Sobre";
import { Section } from "@/components/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Education } from "@/components/Education";
import { Projetos } from "@/components/Projetos";
import { Contato } from "@/components/Contato";
import { TemaContextProvider, useTema } from "@/context/TemaContext";


export default function Home() {
  const temaCtx = useTema();
  return (
    <TemaContextProvider>
      <Header/>
      <Section/>
      <Sobre/>
      <Education/>
      <Projetos/>
      <Contato/>
    </TemaContextProvider> 
  )
}
