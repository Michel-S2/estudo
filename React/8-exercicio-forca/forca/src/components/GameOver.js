import './GameOver.css';

export const GameOver = ({restart, pontuacao}) => {
    return (
        <div>
            <h1>Fim de Jogo</h1>
            <h2>Sua pontuação foi <span>{pontuacao}</span></h2>
            <button onClick={restart}>Reiniciar jogo</button>
        </div>
    )
}