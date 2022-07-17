import React from "react";
import { Cover } from "../../components/Cover"
import image from "../../assets/CalvinCover_resized.jpg"
import "./style.css";


function Home() {
    return (
        <div id="Home" className="background" style={{ backgroundImage: `url(${image})`, height: "100vh" }}>
            <Cover />
        </div>
    );
}

export default Home;
