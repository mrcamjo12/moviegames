import React from 'react';

const ScoreDisplay = ({ correctAnswers, totalQuestions, onRestartQuiz, onBackToHome }) => {
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(0);

  return (
    <div className='score-display'>
      <h2>Your Score:</h2>
      <p>{correctAnswers} out of {totalQuestions} correct</p>
      <p>Score: {percentage}%</p>
      <div>
        <button className='return-button' onClick={onRestartQuiz}>Take Quiz Again</button>
        <button className='return-button' onClick={onBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default ScoreDisplay;
