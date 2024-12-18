import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_KEY = '';

type TemaContextType = {
    tema: string;
    userValid: string;
    setUserValid: (user:string) => void;
    setTema: (novoTema: string) => void;
}

const TemaContext = createContext<TemaContextType | null>(null);


type Props = {
    children: ReactNode;
}

export const TemaContextProvider = ({ children }: Props) => {
    const [tema, setTema] = useState( 'dark');
    const [userValid, setUserValid] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const themeSaved = localStorage.getItem(STORAGE_KEY);
            if (themeSaved) {
                setTema(themeSaved);
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, tema);

    }, [tema]);

    return (
        <TemaContext.Provider value={{tema, userValid, setUserValid, setTema}}>
            {children}
        </TemaContext.Provider>
    )
}

export const useTema = () => useContext(TemaContext);