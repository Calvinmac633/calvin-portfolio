import React from "react";
import "./style.css";
import boostrapIcon from "../../assets/skillIcons/bootstrap.png"
import firebaseIcon from "../../assets/skillIcons/firebase.png"
import htmlIcon from "../../assets/skillIcons/html5.png"
import materializeIcon from "../../assets/skillIcons/materialize.png"
import mongodbIcon from "../../assets/skillIcons/mongodb.jpeg"
import mysqlIcon from "../../assets/skillIcons/mysql.png"
import nodejsIcon from "../../assets/skillIcons/nodejs.png"
import npmIcon from "../../assets/skillIcons/npm.png"
import reactIcon from "../../assets/skillIcons/react.png"
import aboutImage from "../../assets/calvinroof2.jpg"
import mobileAboutImage from "../../assets/aboutmobile.jpg"
import solidityIcon from "../../assets/skillIcons/solidity.png";
import web3jsIcon from "../../assets/skillIcons/web3js.png"
import tailwindcssIcon from "../../assets/skillIcons/tailwindcss.png"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "aos/dist/aos.css";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage

export function SkillsComponent() {
    return (
        <div id="Skills" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div id="Skills" className="background" style={{ backgroundColor: `rgb(255,215,143,0.15)`, height: "100vh" }}>
            <nav style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                <div className="nav-container">
                </div>
            </nav>
            <br></br>

            <h1 style={{marginBottom: "0", textAlign: 'center', overflow: 'hidden !important'}} className="title" data-aos="fade-up">
                Skills
            </h1>
            <h1 style={{textAlign: 'center', color: 'rgb(0,0,0,.5)', overflow: 'hidden !important'}} className="title" data-aos="fade-up">- - -</h1>

            <Row style={{overflow: 'hidden !important'}} xs={3} md={3} lg={6} className="g-6">
                <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn' >
                    <OverlayTrigger
                        key='top'
                        placement='top'
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                            <u>React JS</u>
                            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</p>
                            </Tooltip>
                        }
                        >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={50}>
                            <Card.Img className='cardImage' variant="center" src={reactIcon} alt='react'/>
                        </Card>
                    </OverlayTrigger>
                </Col>
                </a>
                <a href='https://getbootstrap.com/' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn'>
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                <u>Bootstrap</u>
                                <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. </p>
                                </Tooltip>
                            }
                            >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={200}>
                            <Card.Img className='cardImage' variant="center" src={boostrapIcon} alt='boostrap'/>
                        </Card>
                    </OverlayTrigger>
                </Col>
                </a>
                <a href='https://docs.soliditylang.org/en/v0.8.16/' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn'>
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                <u>Solidity</u>
                                <p>Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum. </p>
                                </Tooltip>
                            }
                            >
                    <Card className='skillCard' data-aos="fade-down" data-aos-delay={350}>
                        <Card.Img className='cardImage' variant="center" src={solidityIcon} alt='solidity'/>
                    </Card>
                    </OverlayTrigger>
                </Col>
                </a>

                <a href='https://blog.hubspot.com/marketing/web-design-html-css-javascript#:~:text=HTML%2C%20CSS%2C%20%26%20JavaScript%3A%20A%20Tutorial&text=HTML%20provides%20the%20basic%20structure,the%20behavior%20of%20different%20elements.' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn'>
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                <u>HTML, CSS, JavaScript</u>
                                <p>HTML is the standard markup language for documents designed to be displayed in a web browser. Often assisted by technologies such as CSS and scripting languages such as JavaScript.</p>
                                {/* <p>As a web developer, the three main languages we use to build websites are HTML, CSS, and JavaScript. JavaScript is the programming language, we use HTML to structure the site, and we use CSS to design and layout the web page.</p> */}
                                </Tooltip>
                            }
                            >
                    <Card className='skillCard' data-aos="fade-down" data-aos-delay={500}>
                        <Card.Img className='cardImage' variant="center" src={htmlIcon} alt='html'/>
                    </Card>
                    </OverlayTrigger>
                </Col>
                </a>
                
                <a href='https://firebase.google.com/' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn'>
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                <u>Firebase</u>
                                <p>Google Firebase is a Google-backed application development software that provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
                                </Tooltip>
                            }
                            >
                    <Card className='skillCard' data-aos="fade-down" data-aos-delay={650}>
                        <Card.Img className='cardImage' variant="center" src={firebaseIcon} alt='firebase'/>
                    </Card>
                    </OverlayTrigger>
                </Col>
                </a>
             
                <a href='https://materializecss.com/' target='_blank' rel="noopener noreferrer">
                <Col className='cardColumn'>
                    <OverlayTrigger
                            key='top'
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                <u>Materialize</u>
                                <p>Materialize is a modern responsive CSS framework based on Material Design by Google.</p>
                                </Tooltip>
                            }
                            >
                    <Card className='skillCard' data-aos="fade-down" data-aos-delay={800}>
                        <Card.Img className='cardImage' variant="center" src={materializeIcon} alt='materialize'/>
                    </Card>
                    </OverlayTrigger>
                </Col>
            </a>
             
            </Row>

            <Row style={{marginTop: '.75rem', overflow: 'hidden !important'}} xs={3} md={3} lg={6} className="g-6">
                     
                <a href='https://www.mongodb.com/what-is-mongodb' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>MongoDB</u>
                                    <p>MongoDB is a source-available cross-platform document-oriented database program.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={900}>
                            <Card.Img className='cardImage' variant="center" src={mongodbIcon} alt='mongodb'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>

                <a href='https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>MySQL</u>
                                    <p>MySQL is an open-source relational database management system.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={1050}>
                            <Card.Img className='cardImage' variant="center" src={mysqlIcon} alt='mysql'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>
             
                <a href='https://nodejs.org/en/about/' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>Node JS</u>
                                    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={1200}>
                            <Card.Img className='cardImage' variant="center" src={nodejsIcon} alt='nodejs'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>
              
                <a href='https://www.npmjs.com/' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>npm</u>
                                    <p>npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={1350}>
                            <Card.Img className='cardImage' variant="center" src={npmIcon} alt='npm'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>
                 
                <a href='https://web3js.readthedocs.io/en/v1.7.5/#:~:text=Ethereum%20JavaScript%20API-,web3.,API%20reference%20documentation%20with%20examples.' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>web3 JS</u>
                                    <p>web3. js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={1500}>
                            <Card.Img className='cardImage' variant="center" src={web3jsIcon} alt='github'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>

                <a href='https://tailwindcss.com/' target='_blank' rel="noopener noreferrer">
                    <Col className='cardColumn'>
                        <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                    <u>Tailwind CSS</u>
                                    <p>Tailwind CSS is an open source CSS framework. The main feature of this library is that it does not provide a series of predefined classes for elements such as buttons or tables.</p>
                                    </Tooltip>
                                }
                                >
                        <Card className='skillCard' data-aos="fade-down" data-aos-delay={1650}>
                            <Card.Img className='cardImage' variant="center" src={tailwindcssIcon} alt='terminal'/>
                        </Card>
                        </OverlayTrigger>
                    </Col>
                </a>
       
            </Row>
            </div>
        </div>

    );
}
