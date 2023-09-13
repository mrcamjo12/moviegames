import React from "react";
import { Link } from "react-router-dom";


const PickYourGame = () => {
    
    return (
        <div>
            <div className="pickgame">
                <h1 className="pagitem">pick a game</h1>
                    <Link to='/moviequotesintro'>
                        <button type="button" className="button">movie quotes</button>
                    </Link>
                    <Link to='/kubricktrivia'>
                        <button type="button" className="button">kubrick trivia</button>
                    </Link>
                    <Link to='/samuraimovies'>
                        <button type="button" className="button">samurai movies</button>
                    </Link>
                    <Link to='/martygame'>
                        <button type="button" className="button">scorsese trivia</button>
                    </Link>
                    <Link to='/actorgame'>
                        <button type="button" className="button">who's that actor</button>
                    </Link>
                    <Link to='/directorgame'>
                        <button type="button" className="button">who's that director</button>
                    </Link>
                    <Link to='/setquestions'>
                        <button type="button" className="button">set questions</button>
                    </Link>

            </div>              
        </div>
    )
}

export default PickYourGame