import React from "react";
import "./style.css";
// import NoteTakerApp from "../../assets/NoteTakerApp.jpg"
import PolyVote from "../../assets/PolyVote.jpg"
import coinTracker from '../../assets/coin-tracker.jpg'
import passwordGenImage from "../../assets/passwordGenerator.JPG"
import ethSend from "../../assets/ethSend.jpg"


export function PortfolioComponent() {
    return (
        <div>
            <section id="Portfolio" class="hero is-warning is-medium">
                <div class="hero-body portfolio-body">
                    <section>
                        <div className="container-fluid p-0">
                            <h1 style={{textAlign: "center", overflow: 'hidden !important'}} className="title" data-aos="fade-up">Portfolio</h1>
                            <h1 style={{textAlign: "center", color: 'rgb(0,0,0,.5)', overflow: 'hidden !important'}} className="title" data-aos="fade-up">- - -</h1>
                            <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                    <div style={{overflow: 'hidden !important'}} className="portfolioCard"  data-aos="fade-up" data-aos-delay='400'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='poly vote' src={PolyVote}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Poly Vote</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://polyvote.netlify.app"><button className="portButton">Launch</button></a>
                                        </div>
                                        <p className="card-text">Powered by the Polygon Blockchain, this app gauges market sentiment on different crypto asset pairs by tracking votes casted from unique wallet addresses. 
                                        </p>
                                        <small className="card-text-muted">Solidity, React, Tailwind CSS, Node.js</small>

                                    </div>
                                </div>
                            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard" style={{overflow: 'hidden !important'}} data-aos="fade-up" data-aos-delay='800'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='coin tracker' src={coinTracker}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Coin Tracker</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://delightful-pothos-e3fa43.netlify.app/"><button className="portButton">Launch</button></a>
                                        </div>
                                        <p className="card-text">A coin tracking app that allows you to search through 250 different cryptocurrencies as well as view
                                            details and charts.
                                        </p>
                                        <small className="card-text-muted">React.js, Node.js, Axios, Chart.js</small>

                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard" style={{overflow: 'hidden !important'}}  data-aos="fade-up" data-aos-delay='900'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='note taker' src={ethSend}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Eth Send</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/Calvinmac633/ethSend"><button className="portButton">Repository</button></a>
                                            {/* <a target="_blank" rel='noopener noreferrer' href="http://sleepy-sands-76241.herokuapp.com/"><button className="portButton">Launch</button></a> */}
                                        </div>
                                        <p className="card-text">A blockchain integrated application that sends ETH, and a peronalized message, to anyone in the world with a web3 wallet.</p>
                                        <small className="card-text-muted">Solidity, JSX, Tailwind CSS</small>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard overflow-hidden"  data-aos="fade-up" data-aos-delay='10'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='weather app' src={WeatherApp}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Weather App</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://calvinmac633.github.io/weather-app/"><button className="portButton">Launch</button></a>
                                        </div>
                                        <p className="card-text">A weather forecasting application! Search by city to receive real time weather updates, as well as the future 5-day forecast.
                                        </p>
                                        <small className="card-text-muted">JavaScript, jQuery, HTML, CSS</small>

                                    </div>
                                </div> */}
                                <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard" style={{overflow: 'hidden !important'}}  data-aos="fade-up" data-aos-delay='1200'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='password generator' src={passwordGenImage}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Password Generator</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://calvinmac633.github.io/password-generator/"><button className="portButton">Launch</button></a>
                                        </div>
                                        <p className="card-text">This self-explanatory application generates a password based on selected user’s criteria. Click “Generate” to display the newly created password,
                                            and click “Copy” to copy the password to your clipboard.
                                        </p>
                                        <small className="card-text-muted">JavaScript, jQuery, Materialize-UI, HTML, CSS</small>

                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard" style={{overflow: 'hidden !important'}}  data-aos="fade-up" data-aos-delay='10'>
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='note taker' src={NoteTakerApp}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Note Taker App</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="http://sleepy-sands-76241.herokuapp.com/"><button className="portButton">Launch</button></a>
                                        </div>
                                        <p className="card-text">A note taker application! Create, delete, and update notes!</p>
                                        <small className="card-text-muted">Node.js, Express.js, jQuery</small>
                                    </div>
                                </div> */}
                            </div>
                        </div>


                    </section>
                </div>
            </section>
        </div>
    )
}