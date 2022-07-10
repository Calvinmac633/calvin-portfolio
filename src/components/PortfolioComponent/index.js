import React from "react";
import "./style.css";
import NoteTakerApp from "../../assets/NoteTakerApp.jpg"
import restaurantApp from "../../assets/restaurantApp.jpg"
import WeatherApp from "../../assets/WeatherApp.jpg"
import shopalot from "../../assets/shopalot.JPG"
import coinTracker from '../../assets/coin-tracker.jpg'
import aboutImage from "../../assets/calvinroof2.jpg"
import mobileAboutImage from "../../assets/aboutmobile.jpg"
import passwordGenImage from "../../assets/passwordGenerator.JPG"


const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage
export function PortfolioComponent() {

    return (
        <div>
            <section id="Portfolio" class="hero is-warning is-medium">
                <div style={{ backgroundColor: "rgba(255, 227, 143)" }} class="hero-body">
                        <section>
                            <div className="container-fluid p-0">
                                <h1 style={{textAlign: "center"}} class="title">Portfolio</h1>
                                <h1 style={{textAlign: "center"}} class="title">- - -</h1>
                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-block"></div>
                                            <img className="card-img-top" src={coinTracker}></img>
                                            <div className="cardHeader">
                                                <h5 className="card-title">Coin Tracker</h5>
                                                <a target="_blank" href="https://delightful-pothos-e3fa43.netlify.app/">View Deployment</a>
                                            </div>
                                            <p className="card-text">A coin tracking app that allows you to search through 250 different cryptocurrencies as well as view
                                            details and charts.
                                    </p>
                                            <small className="card-text-muted">React.js, Node.js, Axios, Chart.js</small>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-block"></div>
                                            <img className="card-img-top" src={WeatherApp}></img>
                                            <div className="cardHeader">
                                                <h5 className="card-title">Weather App</h5>
                                                <a target="_blank" href="https://calvinmac633.github.io/weather-app/">View Deployment</a>
                                            </div>
                                            <p className="card-text">A weather forecasting application! Search by city to receive real time weather updates, as well as the future 5-day forecast.
                                </p>
                                            <small className="card-text-muted">JavaScript, jQuery, HTML, CSS</small>

                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-block"></div>
                                            <img className="card-img-top" src={passwordGenImage}></img>
                                            <div className="cardHeader">
                                                <h5 className="card-title">Shopalot</h5>
                                                <a target="_blank" href="https://shopalot-checkitout.herokuapp.com/">View Deployment</a>
                                            </div>
                                            <p className="card-text">A grocery list app that  allows users to create new, or join existing shopping
                                            lists that can be viewed and updated by other members who are given access.
                                    </p>
                                            <small className="card-text-muted">React.js, Node.js, Express.js, MongoDB</small>

                                        </div>
                                    </div> */}
                                    
                                    
                                </div>
                                <div className="row no-gutters">
                                <div className="col-lg-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-block"></div>
                                            <img className="card-img-top" src={passwordGenImage}></img>
                                            <div className="cardHeader">
                                                <h5 className="card-title">Password Generator</h5>
                                                <a target="_blank" href="https://calvinmac633.github.io/password-generator/">View Deployment</a>
                                            </div>
                                            <p className="card-text">This self-explanatory application generates a password based on selected user’s criteria. Click “Generate” to display the newly created password, 
                                            and click “Copy” to copy the password to your clipboard.
                                    </p>
                                            <small className="card-text-muted">JavaScript, jQuery, Materialize-UI, HTML, CSS</small>

                                        </div>
                                    </div>
                                <div className="col-lg-6 col-sm-6">
                                        <div className="card">
                                            <div className="card-block"></div>
                                            <img className="card-img-top" src={NoteTakerApp}></img>
                                            <div className="cardHeader">
                                                <h5 className="card-title">Note Taker App</h5>
                                                <a target="_blank" href="http://sleepy-sands-76241.herokuapp.com/">View Deployment</a>
                                            </div>
                                            <p className="card-text">A note taker application! Create, delete, and update notes!</p>
                                            <small className="card-text-muted">Node.js, Express.js, jQuery</small>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </section>
                    </div>
            </section>
        </div>
    )
}