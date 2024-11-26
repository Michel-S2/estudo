import './StartScreen.css'
export const StartScreen = ({startGame}) => {
    return (
        <div className='start'>
            <h1>Jogo da Forca 💇‍♂️ </h1>
            <p>Clique abaixo para iniciar o jogo!!</p>
            <button onClick={startGame}>Começar</button>
        </div>
    )
}