import { useChat } from "@/context/ChatContext"
import { useUser } from "@/context/UserContext";

export const ChatMessages = () => {
    //Context para ter acesso ao chat e ao usuário
    const chatCtx = useChat();
    const userCtx = useUser();

    return (
        <div className="flex flex-col gap-3">
            {chatCtx?.chat.map((item) => (
                //Imprimos na tela essa div com uma verificação pra saber quem digitou a msg e a estilização correta
                <div key={item.id} 
                     className={`font-bold rounded-md border border-white/20 p-2 text-sm min-w-16 max-w-[300px] break-words
                     ${item.nome === userCtx?.user ? 
                        'self-end bg-white/10 text-right' : 
                        'self-start bg-white/5 text-left'
                    }
                     `} >

                    <div className="font-bold">{item.nome}</div>
                    <p>{item.msg}</p>
                </div>
            ))}
        </div>
    )
}