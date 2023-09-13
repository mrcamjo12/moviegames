import React from "react";

const Header = () => {
    return (
        <div>
            <div className="header">
                <a href="/">
                    <h2 className="home-item">movie masters</h2>
                </a>
                <a href="/highscores">
                    <h4 className="header-link">high scores</h4>
                </a>
                <a href="/categories">
                    <h4 className="header-link">category</h4>
                </a>
                <a href="/teamplay">
                    <h4 className="header-link">team play</h4>
                </a>
                <a href="/upcoming">
                    <h4 className="header-link">upcoming</h4>
                </a>
            </div>
        </div>
    )
}


export default Header