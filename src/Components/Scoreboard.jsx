// Scoreboard.js

import React, { useState } from 'react';

const Scoreboard = () => {
  const [highScores, setHighScores] = useState([]);

  // Function to add a new high score
  const addHighScore = (score, playerName) => {
    // Create a new high score object
    const newHighScore = {
      score,
      playerName,
    };

    // Update the high scores state
    setHighScores((prevHighScores) => [...prevHighScores, newHighScore]);

    // You might want to save high scores to local storage or a server here
  };

  return (
    <div>
      <h2>High Scores</h2>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>
            {score.playerName}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
