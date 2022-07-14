import React from "react";
import "./style.css";



export function Links() {
    return (
        <div className="home-container fromCoverLinks">
            <h1>Full Stack Web Developer</h1>
            <h3>- - -</h3>
            <h3>Below are examples of deployed applications that I have developed and designed. View the github link or Heroku page for further exploration.</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="background-content fromCoverLinks">
                <a href="/#About">
                    <button style={{backgroundColor: 'rgba(225,227,160'}} className="button is-info is-outlined is-large coverButtons">About</button>
                </a>
                <div style={{width: '75px'}}></div>
                <a href="/#Portfolio">
                    <button style={{backgroundColor: 'rgba(225,227,160'}} className="button is-info is-outlined is-large coverButtons">Portfolio</button>
                </a>
            </div>
        </div>

    );
}
