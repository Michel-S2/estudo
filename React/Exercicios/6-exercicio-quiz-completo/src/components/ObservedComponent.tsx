// import React, { useRef, useEffect, useState } from 'react';
// import './styles.css';

// const ObservedComponent = () => {
//   const elementRef = useRef(null); // Referência ao elemento observado
//   const [isVisible, setIsVisible] = useState(false); // Controla a visibilidade do elemento

//   useEffect(() => {
//     // Callback para o Intersection Observer
//     const callback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true); // Atualiza o estado quando o elemento está visível
//         } else {
//           setIsVisible(false);
//         }
//       });
//     };

//     // Cria o Intersection Observer
//     const observer = new IntersectionObserver(callback, {
//       threshold: 0.5, // Altera quando 50% do elemento está visível
//     });

//     // Observar o elemento referenciado
//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     // Cleanup: para de observar quando o componente é desmontado
//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={elementRef}
//       className={`observed-element ${isVisible ? 'visible' : ''}`}
//     >
//       <h2>Este conteúdo aparece com uma animação ao entrar na viewport</h2>
//     </div>
//   );
// };

// export default ObservedComponent;
