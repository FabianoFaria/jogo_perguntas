import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard'
// Types
import { QuestionState, Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      )
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
     <div className='App'>
        <h1>Jogo de Perguntas e respostas em REact</h1>
          <button className='start' onClick={startTrivia}>
            Começar
          </button>
          <p className='score'> Pontuação:</p>
          <p>Carregar questão...</p>
          {
            // <QuestionCard
            //   questionNr={number + 1}
            //   totalQuestions={TOTAL_QUESTIONS}
            //   question={questions[number].question}
            //   answers={question[number].answers}
            //   userAnswer={userAnswers ? userAnswers[number] : undefined}
            //   callback={checkAnswer}
            // />
          }
          <button className='next' onClick={nextQuestion}>
            Próxima pergunta
          </button>
     </div>
   );
}

export default App;
