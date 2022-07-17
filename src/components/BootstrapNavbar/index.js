import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const BootstrapNavbar = () => {
    return (
        <Navbar style={{backgroundColor: 'rgb(255,215,143)'}} expand="lg" sticky="top">
            <Container>
                {/*<Navbar.Brand href="#home">CALVINMACINTOSH</Navbar.Brand>*/}
                <Navbar.Brand id='#navbrand' href="#Home">
                    <span style={{color: '#dbad4a', fontWeight: 500, fontSize: '155%'}} className="title-word-1">CALVIN</span>
                    <span style={{color: '#DF8453', fontWeight: 500, fontSize: '155%'}} className="title-word-2">MACINTOSH</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    {/* TODO: margin auto only centering the links*/}
                    <Nav className="justify-content-end">
                        <Nav.Link style={{fontWeight: 700}} href="#About">About</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Skills">Skills</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link style={{fontWeight: 700}} href="#Contact">Contact</Nav.Link>
                        {/*TODO*/}
                        {/*<NavDropdown title="Misc." id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BootstrapNavbar;
