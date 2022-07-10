import React from "react";
import { Links } from "../components/CoverLinks"
import image from "../assets/CalvinCover.jpg"
import mobileImage from "../assets/homemobile.jpg"
import "./style.css";


function Home() {
    const imageUrl = window.innerWidth >= 650 ? image : mobileImage

    return (
            <div id="Home" className="background" style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
                {/* <h1>Calvin Macintosh</h1> */}
                <Links />
            </div>
    );


}

export default Home;
