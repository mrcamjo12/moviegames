import React, { useState } from 'react';
import Quiz from './Components/Quiz.jsx';
import QuizSelection from './Components/QuizSelector.jsx';

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelection = (quizName) => {
    setSelectedQuiz(quizName);
  };

  return (
  <>
    <h1 className='heading'><a href="/">Camjo's Movie Trivia</a></h1>
    <div className='main-container'>
      

      {/* QuizSelection component for selecting a quiz */}
      <QuizSelection onSelectQuiz={handleQuizSelection} />

      {/* Quiz component for displaying quiz questions */}
      {selectedQuiz && <Quiz selectedQuiz={selectedQuiz} />}

    </div>
  </>  
  );
};

export default App;
