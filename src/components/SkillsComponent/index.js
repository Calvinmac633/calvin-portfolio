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

            <h1 style={{marginBottom: "0", textAlign: 'center'}} className="title">
                Skills
            </h1>
            <h1 style={{textAlign: 'center', color: 'rgb(0,0,0,.5)'}} className="title">- - -</h1>

            <Row xs={3} md={3} lg={6} className="g-6">
                <Col className='cardColumn' >
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={githubIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={boostrapIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={firebaseIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={htmlIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={jqueryIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={materializeIcon} />
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '.75rem'}} xs={3} md={3} lg={6} className="g-6">
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mongodbIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mysqlIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={nodejsIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={npmIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={reactIcon} />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={terminalIcon} />
                    </Card>
                </Col>
            </Row>

        </div>

    );
}
