'use client'
import { useEffect, useState } from "react"
import "./TypingEffect.css"

export const TypingEffect = () => {
    const [text, setText] = useState(''); // Texto atual que será exibido
    const [isDeleting, setIsDeleting] = useState(false); // Controla se está apagando
    const [charIndex, setCharIndex] = useState(0); // Índice do caractere atual
    const [wordIndex, setWordIndex] = useState(0); // Índice da palavra atual
  
    const words = ['Front-End', 'Web Developer']; // Palavras a serem exibidas
    const typingSpeed = isDeleting ? 50 : 100; // Velocidade ao apagar/digitar
    const delayBetweenWords = 1500; // Pausa antes de iniciar a próxima palavra
  
    useEffect(() => {
      const currentWord = words[wordIndex]; // Palavra atual
      let timeout: NodeJS.Timeout;
  
      if (!isDeleting && charIndex < currentWord.length) {
        // Digitação: adiciona um caractere por vez
        console.log(currentWord.substring(0, charIndex + 1))
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Apagamento: remove um caractere por vez
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Pausa antes de começar a apagar
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        // Após apagar, passa para a próxima palavra
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
  
      // Define o temporizador para a próxima atualização
      timeout = setTimeout(() => {}, typingSpeed);
  
      // Limpa o temporizador ao desmontar o componente ou ao atualizar
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);
  
    return (
      <h2 className="h2Profissao">
        {text}
        <span className="cursor"></span>
      </h2>
    );
  };