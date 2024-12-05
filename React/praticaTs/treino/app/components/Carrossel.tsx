import { useEffect, useRef } from "react"

const images = [
    '/images/michel.jpg',
    '/images/michel2.jpg',
    '/images/michel3.jpg',
    '/images/michel4.jpg',
]

export const Carrossel = () => {
    const carrosselRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const velocidade = 1; // Velocidade do scroll
    let animationFrameId: number;

    const smoothScroll = () => {
      if (carrosselRef.current) {
        const firstChild = carrosselRef.current.firstElementChild as HTMLDivElement;
        carrosselRef.current.scrollLeft += velocidade;

        if (carrosselRef.current.scrollLeft >= firstChild.offsetWidth) {
          carrosselRef.current.appendChild(firstChild);
          carrosselRef.current.scrollLeft -= firstChild.offsetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(smoothScroll); // Chama novamente a animação
    };

    // Inicia a animação
    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId); // Cancela a animação ao desmontar
    }, [])

    return (
        <div className="carrosel-cont " ref={carrosselRef}>
            {images.map((item, index) => (
                <div className="carrosel-item" key={index}>
                    <img src={item} alt={`Slide ${index}`} />
                </div>
            ))}
        </div>
    )
}