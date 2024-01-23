import React, { useState, useEffect } from 'react';
import ScoreDisplay from './ScoreDisplay';

const Quiz = ({ selectedQuiz }) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Simulate fetching quiz questions based on the selected quiz
    import(`./Games/${selectedQuiz}.json`)
      .then((module) => module.default)
      .then((data) => {
        setQuizQuestions(data);
        setCurrentQuestion(data[0]); // Set the first question initially
      })
      .catch((error) => console.error('Error fetching quiz questions:', error));
  }, [selectedQuiz]); // Update the questions when selectedQuiz changes

  const handleAnswer = (selectedOption) => {
    // Implement logic to handle user's answer and move to the next question
    // Update state accordingly
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    const currentIndex = quizQuestions.indexOf(currentQuestion);
    const nextIndex = currentIndex + 1;

    if (nextIndex < quizQuestions.length) {
      setCurrentQuestion(quizQuestions[nextIndex]);
    } else {
      // End of quiz logic
      setQuizCompleted(true);
    }
  };

  if (!currentQuestion) {
    // Loading state while questions are being fetched
    return <div>Loading...</div>;
  }

  if (quizCompleted) {
    // Render the score display component if the quiz is completed
    return <ScoreDisplay correctAnswers={correctAnswers} totalQuestions={quizQuestions.length} />;
  }

  return (
    <div className='quiz-container'>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
