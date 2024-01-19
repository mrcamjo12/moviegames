import React, { useState } from 'react';
import Quiz from './Components/Quiz.jsx';
import Scoreboard from './Components/Scoreboard';
import QuizSelection from './Components/QuizSelector.jsx';

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelection = (quizName) => {
    setSelectedQuiz(quizName);
  };

  return (
    <div>
      <h1>Quiz App</h1>

      {/* QuizSelection component for selecting a quiz */}
      <QuizSelection onSelectQuiz={handleQuizSelection} />

      {/* Quiz component for displaying quiz questions */}
      {selectedQuiz && <Quiz selectedQuiz={selectedQuiz} />}

      {/* Scoreboard component for displaying high scores */}
      <Scoreboard />
    </div>
  );
};

export default App;
