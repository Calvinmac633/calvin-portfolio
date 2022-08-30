import React from "react";
import portImage from "../assets/calvinport.jpg"
import portMobile from "../assets/portmobile.jpg"
import "aos/dist/aos.css";

function Contact() {
    const imageUrl = window.innerWidth >= 650 ? portImage : portMobile


    return (
        <div id="Contact" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div id="Skills" className="background" style={{ backgroundColor: `rgb(255,215,143,0.15)`, height: "100vh" }}>
            <div className="home-container fromCoverLinks">
                <h1 style={{overflow: 'hidden !important'}} data-aos="fade-down">Reach Out!</h1>
                <h3 style={{overflow: 'hidden !important'}} data-aos="fade-down">- - -</h3>
                <br></br>
                <br></br>
                <div className="row" style={{ justifyContent: 'center', flexWrap: 'nowrap', width: "30%"}}>
                    <div className="contactCard" style={{overflow: 'hidden !important'}} data-aos="fade-right">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Calvinmac633">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fab fa-github"></i>

                        </a>
                        <h4 className="contactHeader">Github</h4>
                    </div>
                    <div className="contactCard" style={{overflow: 'hidden !important'}} data-aos="fade-up">
                        <a href="mailto: abc@example.com">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fas fa-envelope-square"></i>

                        </a>
                        <h4 className="contactHeader">calvinmac633@gmail.com</h4>
                    </div>
                    <div className="contactCard" style={{overflow: 'hidden !important'}} data-aos="fade-left">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                            <i style={{ color: "rgb(90,162,220)", width: "3rem", height: "3rem" }} className="fab fa-linkedin"></i>
                        </a>
                        <h4 className="contactHeader">LinkedIn</h4>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <footer>
                        <h6 style={{overflow: 'hidden !important', color: 'white'}} data-aos="fade-up">Copyright © 2022 • Calvin Macintosh</h6>
                    </footer>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Contact;
