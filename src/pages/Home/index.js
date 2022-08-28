import React from "react";
import { Cover } from "../../components/Cover"
import image from "../../assets/CalvinCover_resized.jpg"
import "./style.css";


function Home() {
    return (
        <div id="Home" className="background" style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
            <div id="Home" className="background" style={{ backgroundColor: `rgb(255,215,143,0.15)`, height: "100vh" }}>
                <Cover />
            </div>
        </div>
    );
}

export default Home;
