"use client"
import { useEffect, useRef } from "react";
import { ZoomInComponent } from "./components/ZoomInComponent";
import { Carrossel } from "./components/Carrossel";

export default function Home() {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('fade-in');
  
        } else {
          entry.target.classList.remove('fade-in');
        }
      })

    }, {threshold: 0.2});

    if(elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }

  }, [])

  return (
    <div>
      <div className="h-screen mb-6">
        <Carrossel/>
        <div className="h-72 w-80 bg-slate-500"></div>
        <div className="h-72 w-80 bg-red-400"></div>
      </div>
      <div
        ref={elementRef}
        className="animated-element h-screen container mx-auto border mb-10" >
        <h1 className="text-5xl text-white">Conteudo animado</h1>

      </div>
      <ZoomInComponent >
        <h1 className="text-red-950">Outra animação</h1>
      </ZoomInComponent>
        
      
    </div>
  );
}
