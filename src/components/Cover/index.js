import React from "react";
import "./style.css";

export function Cover() {
    return (
        <div className="home-container fromCoverLinks delay-1">
            <h1 style={{overflow: 'hidden !important'}} data-aos="fade-down" data-aos-delay='200' className='fullStack'>Full Stack Web Developer</h1>
            <h3 style={{overflow: 'hidden !important'}} data-aos="fade-down" data-aos-delay='400' className='fullStack'>- - -</h3>
            {/*<h4 id='subtitle' style={{color: '#414a6b'}}>Click around or scroll for more info!</h4>*/}
             <h4 style={{overflow: 'hidden !important', color: '#414a6b'}} data-aos="fade-down" data-aos-delay='600' className="delay-2" id='subtitle'>Below are examples of deployed applications that I have developed and designed. View the github link or Heroku page for further exploration.</h4>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

            <div className="background-content fromCoverLinks">
                <a href="/#About">
                    <button data-aos="fade-right" data-aos-delay='1000' style={{overflow: 'hidden !important', boxShadow: '5px 5px 5px rgb(0,0,0,.45)', background: 'linear-gradient(90deg, rgba(131,58,180,0.65) 0%, rgba(253,29,29,0.65) 50%, rgba(252,176,69,0.65) 100%)'}}
                            className="button is-white is-outlined is-rounded is-large coverButtons delay-3">About</button>
                </a>
                <div style={{width: '75px'}}></div>
                <a href="/#Portfolio">
                    <button data-aos="fade-left" data-aos-delay='1000' style={{overflow: 'hidden !important', boxShadow: '5px 5px 5px rgb(0,0,0,.45)', background: 'linear-gradient(90deg, rgba(131,58,180,0.65) 0%, rgba(253,29,29,0.65) 50%, rgba(252,176,69,0.65) 100%)'}}
                            className="button is-white is-outlined is-rounded is-large coverButtons delay-3">Portfolio</button>
                </a>
            </div>
        </div>

    );
}
