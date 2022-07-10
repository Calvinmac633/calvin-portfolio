import React from "react";
import "./style.css";

function BootstrapNav() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        //     <div className="nav-container">
        //         <a className="navbar-brand js-scroll-trigger" href="#Home">Calvin Macintosh</a>
        //         <div className="navbar-collapse collapse" id="navbarResponsive">
        //             <ul className="navbar-nav ml-auto my-2 my-lg-0">
        //                 <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#About">About</a></li>
        //                 <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Portfolio">Portfolio</a></li>
        //                 <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Skills">Skills</a></li>
        //                 <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Contact">Contact</a></li>
        //             </ul>
        //         </div>
        //         <button className="navbar-toggler navbar-toggler-right collapsed" type="button"
        //             data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
        //             aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        //         </button>
        //     </div>
        // </nav>

        <nav style={{backgroundColor: "rgba(255, 227, 143, 0.966)"}} class="navbar navbar-expand-lg fixed-top">
            <a class="navbar-brand" href="#">Calvin Macintosh</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#About">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#Contact">Contact</a></li>
                </ul>
                <span class="navbar-text">
                 </span>
            </div>
        </nav>
    );
}

export default BootstrapNav;