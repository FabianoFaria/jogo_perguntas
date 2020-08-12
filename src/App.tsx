import React from 'react';

// Components
import QuestionCard from './components/QuestionCard'

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.mouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
     <div className='App'>
        <h1>Jogo de Perguntas e respostas em REact</h1>
          <button className="start" onclick={startTrivia}>
            Começar
          </button>
          <p className="score"> Pontuação:</p>
          <p>Carregar questão...</p>

          <QuestionCard />
          <button className="next" onclick={nextQuestion}>
            Próxima pergunta
          </button>
     </div>
   );
}

export default App;
