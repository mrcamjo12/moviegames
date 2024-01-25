import React from 'react';

const ScoreDisplay = ({ correctAnswers, totalQuestions, onRestartQuiz, onBackToHome }) => {
  // Calculate the user's score
  const userScore = correctAnswers * 5;

  return (
    <div className='score-display'>
      <h2>Quiz Completed!</h2>
      <p>Your Score:</p>
      <p>{correctAnswers} correct out of {totalQuestions} questions</p>
      <p>Score: {userScore} points</p>
      <div className='buttons-container'>
        <button onClick={onBackToHome}>Back to Home</button>
        <button onClick={onRestartQuiz}>Take the Quiz Again</button>
      </div>
    </div>
  );
};

export default ScoreDisplay;
