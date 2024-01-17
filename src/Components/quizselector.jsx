import React, { useState } from 'react';
import Quiz from './quiz';

const QuizSelection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelection = (quizName) => {
    setSelectedQuiz(quizName);
  };

  return (
    <div>
      <h2>Select a Quiz:</h2>
      <button onClick={() => handleQuizSelection('quiz1')}>Quiz 1</button>
      <button onClick={() => handleQuizSelection('quiz2')}>Quiz 2</button>

      {selectedQuiz && <Quiz selectedQuiz={selectedQuiz} />}
    </div>
  );
};

export default QuizSelection;
