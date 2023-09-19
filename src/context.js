import React, {useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [quizend, isQuizEnd] = useState(false);
    const currentQuestion = useState(0)
    const score = useState(0)
    

}