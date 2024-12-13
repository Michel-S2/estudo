import { createContext, ReactNode, useContext, useEffect, useState } from "react"

const STORAGE_kEY = '';

type TemaContextType = {
    tema: string;
    setTema: (novoTema: string) => void
}


const TemaContext = createContext<TemaContextType | null>(null);


type Props = {
    children: ReactNode;
}

export const TemaContextProvide = ({ children }: Props) => {
    const [tema, setTema] = useState(() => {
        return localStorage.getItem(STORAGE_kEY) || 'dark'
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_kEY, tema)
    }, [tema]);

    return (
        <TemaContext.Provider value={{tema, setTema}}>
            {children}
        </TemaContext.Provider>
    )
}


export const useTema = () => useContext(TemaContext);