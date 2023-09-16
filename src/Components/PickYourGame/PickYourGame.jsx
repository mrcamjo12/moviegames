import React from "react";
import { Link } from "react-router-dom";


const PickYourGame = () => {
    
    return (
        <div>
            <div className="pickgame">
                <h1 className="pagitem">pick a game</h1>
                    <Link to='/moviequotesintro'>
                        <button type="button" className="btn btn-danger btn-lg">movie quotes</button>
                    </Link>
                    <Link to='/kubricktrivia'>
                        <button type="button" className="btn btn-danger btn-lg">kubrick trivia</button>
                    </Link>
                    <Link to='/samuraimovies'>
                        <button type="button" className="btn btn-danger btn-lg">samurai movies</button>
                    </Link>
                    <Link to='/martygame'>
                        <button type="button" className="btn btn-danger btn-lg">scorsese trivia</button>
                    </Link>
                    <Link to='/actorgame'>
                        <button type="button" className="btn btn-danger btn-lg">who's that actor</button>
                    </Link>
                    <Link to='/directorgame'>
                        <button type="button" className="btn btn-danger btn-lg">who's that director</button>
                    </Link>
                    <Link to='/setquestions'>
                        <button type="button" className="btn btn-danger btn-lg">set questions</button>
                    </Link>

            </div>              
        </div>
    )
}

export default PickYourGame