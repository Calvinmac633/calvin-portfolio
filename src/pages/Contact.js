import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import image from "../assets/CalvinCover.jpg"
import "./style.css";
import portImage from "../assets/calvinport.jpg"
import portMobile from "../assets/portmobile.jpg"


function Contact() {
    const imageUrl = window.innerWidth >= 650 ? portImage : portMobile


    return (
        <div id="Contact" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="home-container fromCoverLinks">
                <h1>Reach Out!</h1>
                <h3>- - -</h3>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="contactCard">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Calvinmac633">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fab fa-github"></i>

                        </a>
                        <h4 className="contactHeader">Github</h4>
                    </div>
                    <div className="contactCard">
                        <a href="mailto: abc@example.com">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fas fa-envelope-square"></i>

                        </a>
                        <h4 className="contactHeader">calvinmac633@gmail.com</h4>
                    </div>
                    <div className="contactCard">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fab fa-linkedin"></i>
                        </a>
                        <h4 className="contactHeader">LinkedIn</h4>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h6 style={{ color: "white" }}>Copyright © 2022 • Calvin Macintosh</h6>
            </div>

        </div>

    );
}

export default Contact;
