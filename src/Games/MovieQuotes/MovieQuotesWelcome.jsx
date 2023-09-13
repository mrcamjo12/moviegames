import React from "react";
import { rules } from '../Game Rules/rulesapi.js'
import { Link } from "react-router-dom";


const MovieQuotesWelcome = () => {
//opening screen displaying time and question amount
return (
    <div>
    {rules.map((link) => {
        const {id, game, text, buttontext} = link
        if (id === 0) {
            return (
                <div>
                 <h1>Welcome to {game}</h1>
                 <h4>{text}</h4>
                <h2>Are you ready to play?</h2>
                 <a>
                    <button type="button">{buttontext}</button>
                </a>
                </div>
            )
        }
    })}

    </div>
)
// countdown clock

// open to quiz

// final score? or should this be another component?
}

export default MovieQuotesWelcome;