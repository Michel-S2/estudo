import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const STORAGE_KEY = '';

type TemaContextType = {
    tema: string;
    setTema: (novoTema: string) => void;
}

const TemaContext = createContext<TemaContextType | null>(null);


type Props = {
    children: ReactNode;
}

export const TemaContextProvider = ({ children }: Props) => {
    const [tema, setTema] = useState(
        localStorage.getItem(STORAGE_KEY) || 'dark'
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, tema);

    }, [tema]);

    return (
        <TemaContext.Provider value={{tema, setTema}}>
            {children}
        </TemaContext.Provider>
    )
}

export const useTema = () => useContext(TemaContext);