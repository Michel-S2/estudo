'use client'
import "./TypingEffect.css"
import { useEffect, useState } from "react"

import TypeIt from "typeit";


export const TypingEffect = () => {
  
  useEffect(() => {
    new TypeIt('.animacao', {
      speed: 60,
      startDelay: 200,
      loop: true,
      cursorSpeed: 600,
     
    })
    .type('Font-End',  {delay: 1400})
    .move(-7, {delay: 200})
    .type('r', {delay: 400})
    .move(null, { to: "END", instant: true, delay: 500 }).pause(900).delete(9)
    .type('Web Developer', {delay: 1500})
    
    .go();
  }, []);

  return (
    <h2 className="h2Profissao"><span className="animacao"></span>
    </h2>
  );
};