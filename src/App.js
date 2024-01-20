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
    <div className='main-container'>
      <h1>Cam's Movie Games</h1>

      {/* Scoreboard component for displaying high scores */}
      <Scoreboard />

      {/* QuizSelection component for selecting a quiz */}
      <QuizSelection onSelectQuiz={handleQuizSelection} />

      {/* Quiz component for displaying quiz questions */}
      {selectedQuiz && <Quiz selectedQuiz={selectedQuiz} />}

    </div>
  );
};

export default App;
