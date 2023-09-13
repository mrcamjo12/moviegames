import Header from './Components/Header/Header';
import KubrickTrivia from './Games/KubrickTrivia/KubrickTrivia';
import OnSetQuestions from './Games/OnSetQuestions/OnSetQuestions';
import SamuraiGame from './Games/SamuraiMovies/SamuraiMovies';
import MartyGame from './Games/ScorseseTrivia/ScorseseTrivia';
import DirectorGame from './Games/WhosTheDirector/WhosTheDirector';
import Home from './Pages/Home/Home';
import ActorGame from './Games/WhosTheActor/WhosTheActor';
import { Routes, Route } from 'react-router-dom';
import MovieQuotesWelcome from './Games/MovieQuotes/MovieQuotesWelcome';
import Score from './Components/Score/Score'
import kubrickQuestions from './Games/KubrickTrivia/kubricktriviaquestions'
import React, {Component} from 'react';
import Question from './Components/Question';


class App extends Component {
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
            />
        )}
       <Header />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/moviequotesintro' element={<MovieQuotesWelcome />}/>
        <Route path='/kubrictrivia' element={<KubrickTrivia />}/>
        <Route path='/samuraimovies' element={<SamuraiGame />}/>
        <Route path='/martygame' element={<MartyGame />}/>
        <Route path='/actorgame' element={<ActorGame />}/>
        <Route path='/directorgame' element={<DirectorGame />}/>
        <Route path='/setquestions' element={<OnSetQuestions />}/>
      </Routes>
    </div>
  );}
}

export default App;
