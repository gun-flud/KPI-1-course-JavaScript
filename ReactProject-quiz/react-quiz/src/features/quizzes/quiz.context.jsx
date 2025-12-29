import { tests } from './quiz.mock.js';
import { createContext, useContext, useState, } from 'react';

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState(tests.quizzes);

    const addQuiz = (newQuiz) => {
        setQuizzes((previous) => [...previous, newQuiz ]);
    }

    const updateQuiz = (updatedQuiz) => {
        setQuizzes((previous) => 
            previous.map((quiz) => 
                updatedQuiz.id === quiz.id ? updatedQuiz : quiz
            )
        )
    }

    const deleteQuiz = (id) => {
        setQuizzes((previous) => 
            previous.filter((quiz) => quiz.id !== id)
        )
    }

    return (
        <QuizContext.Provider 
        value={{ addQuiz, updateQuiz, deleteQuiz, quizzes }}>
            { children }
        </QuizContext.Provider>
    )
}

export const useQuizzes = () => {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error("useQuizzes must be used within QuizProvider")
  }
  return context
}














