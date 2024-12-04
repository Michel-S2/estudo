"use client"

import { useEffect, useRef } from "react";

export const IntersectionObserverAnimate = (initialClass: string, animateClass: string, threshold: number = 0.5 ) => {

    const elementRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add(animateClass);
                } else {
                    entry.target.classList.remove(animateClass);
                }
            })

        }, {threshold});

        if(elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if(elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }
    }, [initialClass, animateClass, threshold]);

    return elementRef;
}