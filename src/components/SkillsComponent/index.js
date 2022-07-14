import React from "react";
import "./style.css";
import githubIcon from "../../assets/skillIcons/github.jpeg"
import boostrapIcon from "../../assets/skillIcons/bootstrap.png"
import firebaseIcon from "../../assets/skillIcons/firebase.png"
import htmlIcon from "../../assets/skillIcons/html5.png"
import jqueryIcon from "../../assets/skillIcons/jquery.png"
import materializeIcon from "../../assets/skillIcons/materialize.png"
import mongodbIcon from "../../assets/skillIcons/mongodb.jpeg"
import mysqlIcon from "../../assets/skillIcons/mysql.png"
import nodejsIcon from "../../assets/skillIcons/nodejs.png"
import npmIcon from "../../assets/skillIcons/npm.png"
import reactIcon from "../../assets/skillIcons/react.png"
import terminalIcon from "../../assets/skillIcons/terminal.png"
import aboutImage from "../../assets/calvinroof2.jpg"
import mobileAboutImage from "../../assets/aboutmobile.jpg"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const imageUrl = window.innerWidth >= 650 ? aboutImage : mobileAboutImage

export function SkillsComponent() {
    return (
        <div id="Skills" className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
            <nav style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
                <div className="nav-container">
                </div>

            </nav>
            <br></br>


            {/*<div>*/}
            {/*    <div className="columns is-desktop">*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white", marginLeft: '0 !important'}}>1</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white"}}>2</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white"}}>3</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white", marginRight: '0 !important'}}>4</div>*/}
            {/*    </div>*/}
            {/*    <div className="columns is-desktop">*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white",  marginLeft: '0 !important'}}>1</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white"}}>2</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white"}}>3</div>*/}
            {/*        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-fifth-desktop is-one-third-widescreen is-one-fifth-fullhd" style={{backgroundColor: "white",  marginRight: '0 !important'}}>4</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*todo: BOOTSTRAPPP*/}

            <h1 style={{marginBottom: "0", textAlign: 'center'}} className="title">
                Skills
            </h1>
            <h1 style={{textAlign: 'center'}} className="title">- - -</h1>

            <Row xs={3} md={3} lg={6} className="g-6">
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={githubIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={boostrapIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={firebaseIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={htmlIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={jqueryIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={materializeIcon} />
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '.75rem'}} xs={3} md={3} lg={6} className="g-6">
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mongodbIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mysqlIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={nodejsIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={npmIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={reactIcon} />
                    </Card>
                </Col>
                <Col>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={terminalIcon} />
                    </Card>
                </Col>
            </Row>


            {/*<div class="container">*/}
            {/*    <h1 style={{ marginBottom: "0" }} class="title">*/}
            {/*        Skills*/}
            {/*    </h1>*/}
            {/*    <h1 class="title">- - -</h1>*/}
            {/*    <div className="iconRows">*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a target="_blank" href="https://github.com/Calvinmac633" rel="noopener noreferrer"><img alt='Github' className="icons" title="Github" src={githubIcon}/></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img alt='Bootstrap' className="icons" title="Bootstrap" src={boostrapIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='Firebase' title="Firebase" src={firebaseIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='HTML' title="HTML, CSS, JavaScript" src={htmlIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='jQuery' title="jQuery" src={jqueryIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='MySQL' title="MySQL" src={mysqlIcon} /></a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="iconRows">*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://materializecss.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='Materialize' title="Materialize" src={materializeIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='MongoDB' title="MongoDB" src={mongodbIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='Node' title="Node.js" src={nodejsIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='npm' title="npm" src={npmIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className="icons" alt='React' title="React.js" src={reactIcon} /></a>*/}
            {/*        </div>*/}
            {/*        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">*/}
            {/*            <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer"><img className="icons" alt='CLI' title="CLI" src={terminalIcon} /></a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>

    );
}
