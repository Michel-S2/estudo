"use client"

import { Questao } from "@/components/Questao";
import { Results } from "@/components/Results";
import { questionList } from "@/public/questionList";
import { useState } from "react";

const Page = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const loadNextQuestion = () => {
    if(questionList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const title = 'Quiz de academia'

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);

    loadNextQuestion()
  }

  const handleRestartQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-500">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
            <Questao
              question={questionList[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {showResult &&
            <Results questions={questionList} answers={answers}/>
          }
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questionList.length} pergunta${questionList.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartQuiz} className="p-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar o Quiz</button>
          }
        </div>
      </div>
      
    </div>
  )
}


export default Page;