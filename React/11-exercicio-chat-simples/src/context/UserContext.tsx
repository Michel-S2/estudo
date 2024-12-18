"use client"
import { createContext, ReactNode, useState } from "react";

// Type para o context
type UserContextType = {
    user: string;
    setUser: (newUser: string) => void;
}

// Criação do context
const UserContext = createContext<UserContextType | null>(null);


// Criação do provider
// Children Tipado
export const UserContextProvider = ({ children } : {children: ReactNode}) => {

    // State que armazenará o usuário
    const [user, setUser] = useState<string>('');

    return (
        // Provider com os value e o children
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// Hook personalizado para ficar mais facil acessar o context
export const useUser = () => createContext(UserContext);