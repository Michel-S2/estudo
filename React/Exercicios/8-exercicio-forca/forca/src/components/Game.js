import { useState, useRef } from 'react'
import './Game.css'

export const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    letrasAcertadas,
    letrasErradas,
    chances,
    pontuacao

}) => {
    const [letter, setLetter] = useState('');
    //Hook para criar uma referencia no input
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        verifyLetter(letter);

        setLetter('');
        //Voltamos o focu do input com nosso hook
        letterInputRef.current.focus();

    }

    return (
        <div className='game'>
            <p className='points'>
                <span>Pontuação {pontuacao}</span>
            </p>
            <h1>Adivinhe a Palavra</h1>
            <h3 className='dica'>
               Dica sobre a palavra <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem <span>{chances} tentativa(s).</span></p>
            <div className='containerWord'>
                {/*fizemos um map no array de letras para exibir na tela*/}
                {letters.map((letter, i) => (
                    letrasAcertadas.includes(letter) ? (<span key={i} className='letter'>{letter}</span>) : ( <span key={i} className='blankSquare'></span>)
                ))}
               
            </div>
            <div className='containerLetter'>
                <p>tente adivinhar uma letra da palavra: </p>
                <form >
                    <input 
                        type="text" 
                        name='letter' 
                        maxLength={1} 
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        //hook para ter referencia desse input
                        ref={letterInputRef}
                        />
                    <button onClick={handleSubmit}>Jogar</button>
                </form>
            </div>
            <div className='wrongLetters'>
                <p>Letras já utilizadas: </p>
                {letrasErradas.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}