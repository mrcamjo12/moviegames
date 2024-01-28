// QuizSelection.jsx
import React, { useState } from 'react';
import Quiz from './Quiz';

const QuizSelection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false); // New state variable

  const handleQuizSelection = (quizName) => {
    setSelectedQuiz(quizName);
    setQuizStarted(true); // Set quizStarted to true when a quiz is selected
  };

  const handleQuizComplete = (correctAnswers) => {
    // Handle quiz completion logic, e.g., display results or navigate to a new screen
    console.log(`Quiz completed with ${correctAnswers} correct answers`);
  };

  if (!quizStarted) {
    // Render the quiz selection section if a quiz is not started
    return (
      <div className='game-selection'>
        <h2>Select a Game:</h2>
        <button className = 'quiz-button' onClick={() => handleQuizSelection('actors')}>Name that Actor</button>
        <button className = 'quiz-button' onClick={() => handleQuizSelection('directors')}>Name that Director</button>
        <button className = 'quiz-button' onClick={() => handleQuizSelection('kubrick')}>Stanley Kubrick Trivia</button>
        <button className = 'quiz-button' onClick={() => handleQuizSelection('setquestions')}>Questions from Set</button>
        <button className = 'quiz-button' onClick={() => handleQuizSelection('quotes')}>Movie Quotes</button>
      </div>
    );
  }

  // Render the Quiz component if a quiz is started
  return <Quiz selectedQuiz={selectedQuiz} onQuizComplete={handleQuizComplete} />;
};

export default QuizSelection;
