import React from "react";
import portImage from "../assets/calvinport.jpg"
import portMobile from "../assets/portmobile.jpg"
import "aos/dist/aos.css";
import ContactComponent from "../components/ContactComponent";

function Contact() {
    const imageUrl = window.innerWidth >= 650 ? portImage : portMobile


    return (
        <div id="Contact" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div id="Skills" className="background" style={{ backgroundColor: `rgb(255,215,143,0.15)`, height: "100vh" }}>
            <div className="home-container fromCoverLinks">
                <h1 style={{overflow: 'hidden !important'}} data-aos="fade-down">Reach Out!</h1>
                <h3 style={{overflow: 'hidden !important'}} data-aos="fade-down">- - -</h3>
                <ContactComponent/>
                <div>
                    <footer>
                        <h6 style={{overflow: 'hidden !important', color: 'white', marginTop: '5rem'}} data-aos="fade-up">Copyright © 2022 • Calvin Macintosh</h6>
                    </footer>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Contact;
