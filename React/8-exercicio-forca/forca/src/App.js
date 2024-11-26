//CSS
import './App.css';

//REACT
import {useCallback, useEffect, useState } from 'react';

//DATA
import { wordsList } from './data/wordsList';

//COMPONENTS
import { StartScreen } from './components/StartScreen';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';

const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name);
  const [words] = useState(wordsList)

  const numeroChance = 3

  //States para pegar a palavra, categoria e fazer o array das letras da palavra inicial
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [letrasAcertadas, setLetrasAcertadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [chances, setChances] = useState(numeroChance);
  const [pontuacao, setPontuacao] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pegamos as categorias do objeto
    const categories = Object.keys(words);
    //escolhemos uma categoria aleatoria
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //escolhemos uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])
  
  //começar o jogo
  const startGame = useCallback(() => {
    clearLetterState();

    //escolher a palavra
    const {word, category} = pickWordAndCategory();

    //criar um array de letras
    let wordLetters = word.split("");

    //transformamos o array de letras em minusculas
    wordLetters = wordLetters.map(l => l.toLowerCase());

    setPickedWord(word);
    setCategory(category);
    setLetters(wordLetters);

    setGameStage(stage[1].name);
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const letrasNormal = letter.toLowerCase();

    if(letrasAcertadas.includes(letrasNormal) || letrasErradas.includes(letrasNormal) || letrasNormal === '') return false

    if(letters.includes(letrasNormal)) {
      setLetrasAcertadas((atualLetraAcertadas) => [
        ...atualLetraAcertadas, letrasNormal
      ])
    } else {
      setLetrasErradas((atualLetraErradas) => [
        ...atualLetraErradas, letrasNormal
      ]);

      setChances((atualChance) => atualChance - 1);
    }

  }

  const clearLetterState = () => {
    setLetrasAcertadas([]);
    setLetrasErradas([]);
  }

  useEffect(() => {

    if(chances <= 0) {
      clearLetterState();

      setGameStage(stage[2].name)
    }


  }, [chances])

  //Checar a condição de vitória
  useEffect(() => {
    //Transforma em um array sem letras repetidas
    const unicasLetras = [...new Set(letters)];

    //Acertou a palavra
    if(letrasAcertadas.length === unicasLetras.length) {
      //Aumentar pontuação
      setPontuacao((atualPontuacao) => atualPontuacao += 50);

      startGame();
    }

  }, [letrasAcertadas, letters, startGame])


  const restart = () => {
    setPontuacao(0);
    setChances(numeroChance);
    setGameStage(stage[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && 
      <Game 
        verifyLetter={verifyLetter}
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        letters={letters}
        letrasAcertadas={letrasAcertadas}
        letrasErradas={letrasErradas}
        chances={chances}
        pontuacao={pontuacao}
        />}
      {gameStage === 'end' && <GameOver restart={restart} pontuacao={pontuacao}/>}
    </div>
  );
}

export default App;
