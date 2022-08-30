import React, { useEffect } from "react";
import "./style.css";
import resume from "../../assets/Calvin-Macintosh-Resume.pdf"
import Aos from 'aos';
import "aos/dist/aos.css";


export function AboutComponent() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    return (
        <div>

            <section id="About" className="hero is-info is-medium">
                <nav style={{ backgroundColor: "rgba(255, 149, 149, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                    <div className="nav-container">
                    </div>
                </nav>
                <div class="hero-body">
                    <div class="container">
                        <h1 data-aos="fade-down" className='aboutMe'>About Me</h1>
                        <h3 data-aos="fade-down" className='aboutMe' style={{color: "rgb(255,255,255,.5)"}}>- - -</h3>
                        <h4 data-aos="fade-up" className='aboutParagraph'>Proficient full stack developer with a background in actuarial
                            data analytics. Professional experience working in agile development environment
                            and a passion for cryptocurrencies, decentralized technologies, and creating responsive
                            and user-friendly web designs. Excited to combine my technical skills in web development
                            with my background in data analytics to create thoughtful, customer-focused designs that drive
                            company growth and innovation.</h4>

                        <div style={{justifyContent: 'center'}} className="field is-grouped">
                            <div className="control" >
                                <a  data-aos="fade-right" className="bd-tw-button button is-light is-outlined" rel="noopener noreferrer" target="_blank" href="https://github.com/Calvinmac633?tab=repositories">
                                          <span className="icon">
                                              <i className="fab fa-github"></i>
                                          </span>
                                    <span>
                                              Github Repo
                                             </span>
                                </a>
                            </div>
                            <div className="control">
                                <a  data-aos="fade-left" href={resume} target="_blank" rel="noopener noreferrer"
                                   className="button is-light is-outlined">
                                              <span className="icon">
                                                 <i className="fa fa-check-square"></i>
                                              </span>
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>



          {/*              <br></br>*/}
          {/*              <div className="field is-grouped">*/}
          {/*                  <p className="control">*/}
          {/*                      <a className="bd-tw-button is-medium button is-light is-outlined" rel="noopener noreferrer" target="_blank" href="https://github.com/Calvinmac633?tab=repositories">*/}
          {/*                      <span className="icon">*/}
          {/*                          <i className="fab fa-github"></i>*/}
          {/*                      </span>*/}
          {/*                          <span>*/}
          {/*                          Github Repo*/}
          {/*</span>*/}
          {/*                      </a>*/}
          {/*                  </p>*/}
          {/*                  <p className="control">*/}
          {/*                      <a href={resume} target="_blank" rel="noopener noreferrer"*/}
          {/*                         className="button is-medium is-light is-outlined">*/}
          {/*                      <span className="icon">*/}
          {/*                          <i className="fas fa-check-square"></i>*/}
          {/*                      </span>*/}
          {/*                          <span>Resume</span>*/}
          {/*                      </a>*/}
          {/*                  </p>*/}
                        </div>
                    </div>
          {/*      </div>*/}
            </section>

        </div>

    );
}
