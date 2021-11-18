import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";




const Contact = () => {
    return (
        <div
            style={{ backgroundColor: '#1C1C1C' }}
        >
            <ContactForm />
        </div>
    );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
    return (
        <div style={{ padding: "58px 0 40px" }}>
            <div>
                <Container>
                    <Row>
                        <Col md={12} sm={12}>
                                <h2 className="text-center text-white">MOBOSHOP Contact Form</h2>
                                <p className="text-center text-muted mb-4">
                                    Drop a message and we will get back to you soon!
                                </p>
                                <Form>
                                    <Row>
                                        
                                            <Form.Group className="mb-3 text-white text-start" controlId="formBasicText">
                                                <Form.Label>Your Name </Form.Label>
                                                <Form.Control style={formStyle} type="text" placeholder="Enter Your Name" />
                                            </Form.Group>
                                </Row>
                                <Row>
                                        <Form.Group className="mb-3 text-white text-start" controlId="formBasicEmail">
                                                <Form.Label>Your Email </Form.Label>
                                                <Form.Control style={formStyle} type="email" placeholder="Enter Your Email" />
                                            </Form.Group>
                                        
                                </Row>
                                    
                                    <Form.Group className="mb-3 text-white text-start" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Messages</Form.Label>
                                        <Form.Control style={formStyle} placeholder="Write you message..." as="textarea" rows={3} />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button className="mb-5 px-5 fw-bolder fs-5 " style={{ backgroundColor: "#D8BE04", border: "#D8BE04", color: "#1C1C1C" }} type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                        </Col>


                        <Col md={6} sm={12} className="text-white text-center">
                           
                            </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Contact;