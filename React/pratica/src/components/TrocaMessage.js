export const TrocaMessage = ({ handleMessage }) => {
    const mensagens = ['Olá', 'Eaii', 'Tudo bem com você?']
    return (
        <div>
            <button onClick={() => handleMessage(mensagens[0])}>Trocar msg 1</button>
            <button onClick={() => handleMessage(mensagens[1])}>Trocar msg 2</button>
            <button onClick={() => handleMessage(mensagens[2])}>Trocar msg 3</button>
        </div>
    )
}