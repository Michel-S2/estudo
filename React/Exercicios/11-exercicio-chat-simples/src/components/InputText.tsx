"use client"
import { useChat } from "@/context/ChatContext";
import { useState } from "react";

//Props que recebemos o nome do usuario
type Props = {
    name: string;
}

export const InputText = ({ name }: Props ) => {
    const [textInput, setTextInput] = useState('');

    //Context do chat para conseguimos adicionar mensagem
    const chatCtx = useChat();

    //Função pra adicionar a mensagem no array do context do chat
    const handleKeyUp = (event: React.KeyboardEvent) => {
        if (event.code.toLowerCase() === 'enter') {
            if (textInput.trim() !== '') {

                // Adicionamos a mensagem, com o nome e a mensagem conforme fizemos no
                // reducer do chat
                chatCtx?.addMensage(name, textInput);
                setTextInput('');
            }
        }
    }


    return (
        <input 
            type="text"
            className="w-full h-full outline-none bg-transparent px-2"
            placeholder={`${name}, digite uma mensagem e aperte enter`} 
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            onKeyUp={handleKeyUp}/>
    )
}