import React from "react";
import "./style.css";
// import NoteTakerApp from "../../assets/NoteTakerApp.jpg"
import WeatherApp from "../../assets/WeatherApp.jpg"
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
                            <h1 style={{textAlign: "center"}} class="title">Portfolio</h1>
                            <h1 style={{textAlign: "center", color: 'rgb(0,0,0,.5)'}} class="title">- - -</h1>
                            <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard">
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='note taker' src={ethSend}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Eth Send</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/Calvinmac633/ethSend"><button>Repository</button></a>
                                            {/* <a target="_blank" rel='noopener noreferrer' href="http://sleepy-sands-76241.herokuapp.com/"><button>Launch</button></a> */}
                                        </div>
                                        <p className="card-text">A blockchain integrated application that sends ETH, and a peronalized message, to anyone in the world with a web3 wallet.</p>
                                        <small className="card-text-muted">Solidity, JSX, Tailwind CSS</small>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard">
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='coin tracker' src={coinTracker}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Coin Tracker</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://delightful-pothos-e3fa43.netlify.app/"><button>Launch</button></a>
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
                                    <div className="portfolioCard">
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='weather app' src={WeatherApp}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Weather App</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://calvinmac633.github.io/weather-app/"><button>Launch</button></a>
                                        </div>
                                        <p className="card-text">A weather forecasting application! Search by city to receive real time weather updates, as well as the future 5-day forecast.
                                        </p>
                                        <small className="card-text-muted">JavaScript, jQuery, HTML, CSS</small>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard">
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='password generator' src={passwordGenImage}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Password Generator</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="https://calvinmac633.github.io/password-generator/"><button>Launch</button></a>
                                        </div>
                                        <p className="card-text">This self-explanatory application generates a password based on selected user’s criteria. Click “Generate” to display the newly created password,
                                            and click “Copy” to copy the password to your clipboard.
                                        </p>
                                        <small className="card-text-muted">JavaScript, jQuery, Materialize-UI, HTML, CSS</small>

                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-sm-6">
                                    <div className="portfolioCard">
                                        <div className="card-block"></div>
                                        <img className="card-img-top" alt='note taker' src={NoteTakerApp}></img>
                                        <div className="cardHeader">
                                            <h5 className="card-title">Note Taker App</h5>
                                            <a target="_blank" rel='noopener noreferrer' href="http://sleepy-sands-76241.herokuapp.com/"><button>Launch</button></a>
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