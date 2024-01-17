import React, { useState, useEffect } from 'react';

const Quiz = ({ selectedQuiz }) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Simulate fetching quiz questions based on the selected quiz
    import(`./path/to/${selectedQuiz}.json`)
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
    // For simplicity, let's just move to the next question
    const currentIndex = quizQuestions.indexOf(currentQuestion);
    const nextIndex = currentIndex + 1;

    if (nextIndex < quizQuestions.length) {
      setCurrentQuestion(quizQuestions[nextIndex]);
    } else {
      // End of quiz logic, navigate to the result or another component
    }
  };

  if (!currentQuestion) {
    // Loading state while questions are being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
