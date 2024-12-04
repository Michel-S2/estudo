import { useEffect, useRef } from "react"

export const Animacao = (initialClass: string, animateClass: string, threshold: number = 0.3) => {
    const elementRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add(animateClass);
                    observer.unobserve(entry.target);
                }
            })

        }, {threshold});

        if(elementRef.current) {
            observer.observe(elementRef.current);
        }  
        
        return () => {
            if(elementRef.current) {
                observer.disconnect();
            }
        }

    }, [initialClass, animateClass, threshold])



    return elementRef;


}