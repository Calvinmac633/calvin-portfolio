import React from "react";
import { Links } from "../components/CoverLinks"
import image from "../assets/CalvinCover.jpg"
import "./style.css";


function Home() {
    return (
            <div id="Home" className="background" style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
                {/* <h1>Calvin Macintosh</h1> */}
                <Links />
            </div>
    );
}

export default Home;
