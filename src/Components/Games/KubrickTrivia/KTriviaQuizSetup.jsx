import React, { Component } from "react";
import kubrickQuestions from './kubricktriviaquestions'
import Question from "../../Components/Question";
import Score from "../../Components/Score/Score";

class KubrickTriviaQuiz extends Component {
    constructor(props) {
      super(props);
      this.state = {
       questionBank: kubrickQuestions,
       currentQuestion: 0,  
       score: 0,
       quizend: false,
       selectedOption: '',
    }
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion()
  }

  checkAnswer = () => {
    const {questionBank, currentQuestion, selectedOption, score} = this.state
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1}))
    }
  }

  handleNextQuestion = () => {
    const { questionBank, currentQuestion} = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({ 
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: '',
      }))
    } else {
      this.setState({
        quizend: true,
      })
    }
  }


  render(){
    const {questionBank, currentQuestion, selectedOption, score, quizend} = this.state
    return (
      <div>
        <h1>Kubrick Questions</h1>
        {!quizend ? (
            <Question
              question={questionBank[currentQuestion]}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit} 
            />
        ) : (
            <Score 
              score={score}
              onNextQuestion={this.handleNextQuestion}
            />
            )}
        </div>
    )
}

}


export default KubrickTriviaQuiz