import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './style.css'

const BootstrapNavbar = () => {
    return (
        <Navbar style={{backgroundColor: 'rgb(255,215,143)', position: 'fixed', top: 0, width: '100%'}} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand id='#navbrand' href="#Home">
                    <span style={{color: '#dbad4a', fontWeight: 500, fontSize: '110%'}} className="title-word-1">CALVIN</span>
                    <span style={{color: '#DF8453', fontWeight: 500, fontSize: '110%'}} className="title-word-2">MACINTOSH</span>
                </Navbar.Brand>
                <div className='linkIcon'>
                    <a className='githubIcon' target="_blank" rel="noopener noreferrer" href="https://github.com/Calvinmac633">
                        <i id="githubIconId" style={{width: '2rem', height: '2rem'}} className="fab fa-github"></i>
                    </a>
                </div>
                <div className='linkIcon'>
                    <a className='githubIcon' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-macintosh-b5025198/">
                        <i id="linkedInIconId" style={{width: '2.2rem', height: '2.2rem'}} className="fab fa-linkedin"></i>
                    </a>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link style={{fontWeight: 700}} href="#About">About</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Skills">Skills</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BootstrapNavbar;
