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
import React from 'react';
import Scoreboard from './Pages/Scoreboard/Scoreboard';
import TeamPlayRules from './Pages/TeamPlay/TeamPlay';



const App = () => {
  return(
    <div>
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
        <Route path = '/highscores' element={<Scoreboard />}/>
        <Route path = '/teamplay' element={<TeamPlayRules />}/>
      </Routes>
    </div>
  );
}


export default App;
