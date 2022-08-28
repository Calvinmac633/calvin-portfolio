import React from "react";
import "./style.css";
import githubIcon from "../../assets/skillIcons/github.jpeg"
import boostrapIcon from "../../assets/skillIcons/bootstrap.png"
import firebaseIcon from "../../assets/skillIcons/firebase.png"
import htmlIcon from "../../assets/skillIcons/html5.png"
import materializeIcon from "../../assets/skillIcons/materialize.png"
import mongodbIcon from "../../assets/skillIcons/mongodb.jpeg"
import mysqlIcon from "../../assets/skillIcons/mysql.png"
import nodejsIcon from "../../assets/skillIcons/nodejs.png"
import npmIcon from "../../assets/skillIcons/npm.png"
import reactIcon from "../../assets/skillIcons/react.png"
import terminalIcon from "../../assets/skillIcons/terminal.png"
import aboutImage from "../../assets/calvinroof2.jpg"
import mobileAboutImage from "../../assets/aboutmobile.jpg"
import solidityIcon from "../../assets/skillIcons/solidity.png"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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

            <h1 style={{marginBottom: "0", textAlign: 'center'}} className="title">
                Skills
            </h1>
            <h1 style={{textAlign: 'center', color: 'rgb(0,0,0,.5)'}} className="title">- - -</h1>

            <Row xs={3} md={3} lg={6} className="g-6">
                <Col className='cardColumn' >
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={reactIcon} alt='react' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={boostrapIcon} alt='boostrap' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={firebaseIcon} alt='firebase' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={htmlIcon} alt='html' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={solidityIcon} alt='solidity' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={materializeIcon} alt='materialize' />
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '.75rem'}} xs={3} md={3} lg={6} className="g-6">
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mongodbIcon} alt='mongodb' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={mysqlIcon} alt='mysql' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={nodejsIcon} alt='nodejs' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={npmIcon} alt='npm' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={githubIcon} alt='github' />
                    </Card>
                </Col>
                <Col className='cardColumn'>
                    <Card className='skillCard'>
                        <Card.Img className='cardImage' variant="center" src={terminalIcon} alt='terminal' />
                    </Card>
                </Col>
            </Row>
            </div>
        </div>

    );
}
