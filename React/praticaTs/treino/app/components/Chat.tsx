import { useState } from "react";
import { useTema } from "../context/TemaContext"


type ListaMensagens = {
    nome: string;
    msg: string
}

export const Chat = () => {
    const userValidCtx = useTema();
    const [usuario1, setUsuario1] = useState<string>('');
    const [usuario2, setUsuario2] = useState<string>('');
    const [mensagens, setMensagens] = useState<ListaMensagens[]>([]);

    const verificarTecla = (i: React.KeyboardEvent<HTMLInputElement>) => {
        if (i.key === 'Enter') {

            enviarMsgUser1();
        }
    }


    const verificarTecla2 = (i: React.KeyboardEvent<HTMLInputElement>) => {
        if (i.key === 'Enter') {

            enviarMsgUser2();
        }
    }


    const adicionarMsg = (nome:string, msg:string) => {
        if (msg.trim() === '') return 

        const novaMensagem = {nome, msg};

        setMensagens([...mensagens, novaMensagem]);

    }


    const enviarMsgUser1 = () => {
        if (userValidCtx) {
            adicionarMsg(userValidCtx?.userValid, usuario1);
            setUsuario1('');
        }
    }

    const enviarMsgUser2 = () => {
        if (usuario2.trim() === '') return;
        adicionarMsg('Bot', usuario2);
        setUsuario2('');
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-[30%] h-[600px] border border-zinc-500 flex flex-col justify-between">
                <div className="h-[500px] overflow-y-auto">
                    {mensagens.map((msg, index) => (
                        <div key={index} className=" container-msg">
                            <div className={`container-itens ${msg.nome === userValidCtx?.userValid ? 'direita' : 'esquerda' } `}>
                                <div className="msg">
                                    <strong>{msg.nome}</strong> <span className={`span`}>{msg.msg}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
                <div>
                    <input 
                        type="text" 
                        className="w-full outline-none  border-t px-2 border-zinc-500 bg-transparent h-12" 
                        placeholder={`${userValidCtx?.userValid}, digite a mensagem e aperte enter `}
                        onChange={(i) => setUsuario1(i.target.value)}
                        value={usuario1}
                        onKeyUp={(i) => verificarTecla(i)}/>
                    <input 
                        type="text" 
                        className="w-full outline-none  border-t px-2 border-zinc-500 bg-transparent h-12" 
                        placeholder="Bot, digite a mensagem e aperte enter"
                        onKeyUp={(i) => verificarTecla2(i)}
                        onChange={(i) => setUsuario2(i.target.value)}
                        value={usuario2}/>
                </div>
            </div>
        </div>
    )
}