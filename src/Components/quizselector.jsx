import React, { useState } from 'react';
import Quiz from './Quiz'

const QuizSelection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelection = (quizName) => {
    setSelectedQuiz(quizName);
  };

  return (
    <div className='game-selection'>
      <h2>Select a Quiz:</h2>
      <button onClick={() => handleQuizSelection('actors')}>Name that Actor</button>
      <button onClick={() => handleQuizSelection('directors')}>Name that Director</button>
      <button onClick={() => handleQuizSelection('kubrick')}>Stanley Kubrick Trivia</button>
      <button onClick={() => handleQuizSelection('samurai')}>Samurai Movies</button>
      <button onClick={() => handleQuizSelection('setquestions')}>Questions from Set</button>
      <button onClick={() => handleQuizSelection('quotes')}>Movie Quotes</button>
      {selectedQuiz && <Quiz selectedQuiz={selectedQuiz} />}
    </div>
  );
};

export default QuizSelection;
