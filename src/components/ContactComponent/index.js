import React, {useState, useEffect} from "react";
import "./style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css";


const Result = () => {
    return (
        <p>Your message has been successfully sent!</p>
    );
}

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

function ContactComponent(props) {
    const [result, showResult] = useState();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_esgwusx', 'template_1sf8if7', e.target, 'lHOA13hYyg68z0PZi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    return (
        <Form className="contactForm" onSubmit={sendEmail}  data-aos="fade-up">
        <Container>
            {(windowSize.innerWidth < 1000) ? 
            (<>
                      <Col>   
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="fullName" type="name" placeholder="Name..." required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email ..." required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feel free to ask me anything!</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} required/>
                    </Form.Group>

                    <Button className="sendButton" style={{backgroundColor: '#ffd78f', borderColor: '#c9a159', fontWeight: '700'}} type="submit">
                        Send
                    </Button>
                    <div>
                       {result ? <Result /> : null}
                    </div>
                </Col>
            </>) 
            : 
            <>
             <Row>
                <Col>   
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="fullName" type="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter your email address" />
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feel free to ask me anything!</Form.Label>
                        <Form.Control name="message" as="textarea" rows={5} />
                    </Form.Group>

                    <Button className="sendButton" style={{backgroundColor: '#ffd78f', borderColor: '#c9a159', fontWeight: '700'}} type="submit">
                        Send
                    </Button>
                    <div>
                       {result ? <Result /> : null}
                    </div>
                </Col>
            </Row>
            </>}
      </Container>
      </Form>
    );
}

export default ContactComponent;