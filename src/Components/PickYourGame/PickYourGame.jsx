import React from "react";
import MovieQuotes from "../../Games/MovieQuotes/MovieQuotes";
import KubrickTrivia from "../../Games/KubrickTrivia/KubrickTrivia";
import SamuraiGame from "../../Games/SamuraiMovies/SamuraiMovies";
import MartyGame from "../../Games/ScorseseTrivia/ScorseseTrivia";
import ActorGame from "../../Games/WhosTheActor/WhosTheActor";
import DirectorGame from "../../Games/WhosTheDirector/WhosTheDirector";


const PickYourGame = () => {
    return (
        <div>
            <div className="pickgame">
            <h1 className="pagitem">pick a game</h1>
            <button onClick={MovieQuotes} type="button" className="button">movie quotes</button>
            <button onClick={KubrickTrivia} type="button" className="button">kubrick trivia</button>
            <button onClick={SamuraiGame} type="button" className="button">samurai films</button>
            <button onClick={MartyGame} type="button" className="button">scorsese trivia</button>
            <button onClick={ActorGame} type="button" className="button">guess that actor</button>
            <button onClick={DirectorGame} type="button" className="button">guess that director</button>
            </div>              
        </div>
    )
}

export default PickYourGame