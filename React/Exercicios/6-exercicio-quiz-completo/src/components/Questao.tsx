"use client"
import { questionList } from "@/public/questionList"
import { QuestionType } from "@/types/QuestionType";
import { useState } from "react";

type Props = {
    question: QuestionType;
    count: number;
    onAnswer: (answer: number) => void;
}

export const Questao = ({ question, count, onAnswer }: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null ) {
            setSelectedAnswer(key);
            
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null)
            }, 2000)
            
        }
    }

    return (
        <div>
            <div className="text-3xl mb-5">{count}. {question.question}</div>
            <div className="">
                {question.options.map((item, key) => (
                    <div 
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`rounded-md px-3 py-2 text-lg mb-4 bg-blue-100 border-blue-500
                        
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-500'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-500'}
                        
                        `}>{item}</div>
                ))}
            </div>
        </div>
    )
}