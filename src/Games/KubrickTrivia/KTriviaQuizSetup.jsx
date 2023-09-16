import React, { Component } from "react";
import kubrickQuestions from './kubricktriviaquestions'
import Question from "../../Components/Question";
import Score from "../../Components/Score/Score";

class KubrickTriviaQuiz extends Component {
    constructor(props) {
    super(props);
    this.state = {
      qbank: kubrickQuestions,
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
    const {qbank, currentQuestion, selectedOption, score} = this.state
    if (selectedOption === qbank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1}))
    }
  }

  handleNextQuestion = () => {
    const { qbank, currentQuestion} = this.state;
    if (currentQuestion + 1 < qbank.length) {
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
    const {qbank, currentQuestion, selectedOption, score, quizend} = this.state
    return (
      <div>
        {!quizend ? (
            <Question
              question={qbank[currentQuestion]}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit} 
            />
        ) : (
            <Score 
              score={score}
              onNextQuestion={this.handleNextQuestion}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit} 
            />)}
        </div>
    )
}

}


export default KubrickTriviaQuiz