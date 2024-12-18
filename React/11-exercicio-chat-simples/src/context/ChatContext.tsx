"use client"
import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/Message";
import { createContext, ReactNode, useReducer } from "react";

// Tipamos o context
type ChatContextType = {
    // Tipamos com o array de message
    chat: Message[];
    addMensage: (nome: string, msg: string) => void;
}


// Criação do context do chat
const ChatContext = createContext<ChatContextType | null>(null);

// Provider do chat
// Tipamos o children
export const ChatContextProvider = ({ children }: {children:ReactNode}) => {
    // Adicionamos o reducer
    const [chat, dispatch] = useReducer(chatReducer, []);

    // Função responsável por adicionar uma mensagem
    const addMensage = (nome: string, msg: string) => {
        dispatch({
            type: 'add',
            payload: {nome, msg}
        })
    }

    return (
        // Retornamos o Chat com o provider e passamos no value o array de msg e a função que add msg
        <ChatContext.Provider value={{chat, addMensage}}>
            {children}
        </ChatContext.Provider>
    )
}
// Hook personalizado para ficar mais facil acessar o context
const useChat = () => createContext(ChatContext);