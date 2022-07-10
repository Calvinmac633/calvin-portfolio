import React from "react";
import "./style.css";
import resume from "../../assets/Calvin-Macintosh-Resume.pdf"


export function AboutComponent() {
    return (
        <div>

        <section id="About" class="hero is-info is-medium">
            <nav style={{ backgroundColor: "rgba(255, 149, 149, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                <div className="nav-container">
                </div>
            </nav>
            <div class="hero-body">
                <div class="container">
                    <h1 style={{color: "white"}}>About Me</h1>
                    <h3 style={{color: "white"}}>- - -</h3>
                    <h4 style={{color: "white"}}>A Full-Stack Developer, recently graduated from University of Pennsylvania's Coding Bootcamp. 
                    Experienced in working with others to produce dynamic, user-friendly web applications.
                    Continue below to see what technologies and projects I have experience in.</h4>
                    <br></br>
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="bd-tw-button is-medium button is-light is-outlined" target="_blank" href="https://github.com/Calvinmac633?tab=repositories">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span>
                                    Github Repo
          </span>
                            </a>
                        </p>
                        <p className="control">
                            <a href={resume} target="_blank"
                                className="button is-medium is-light is-outlined">
                                <span className="icon">
                                    <i className="fas fa-check-square"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    </div>

    );
}