import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone,  faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

// import FB from './../../../Assets/fbicon.png';
// import Linkedin from './../../../Assets/linkedinicon.png';
// import Twitter from './../../../Assets/twittericon.png';
// import Insta from './../../../Assets/instaicon.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor:"#231F20"}}>
        <div>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="text-center my-auto">
                                <h1 style={{ color: "tomato" }}>MOBOSHOP </h1>
                                <h2 style={{ color: "white" }}>Your Trusted Partner</h2>
                        </div>

                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link text-center">
                                <li style={{ color: "tomato" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Fast View</h3></li>
                                <li><NavLink to="/home"> <span className="ms-1">Home</span></NavLink></li>
                                <li><NavLink to="/about"> <span className="ms-1">About us</span></NavLink></li>
                                <li><NavLink to="/products"> <span className="ms-1">Products</span></NavLink></li>
                                <li><NavLink to="/contact"> <span className="ms-1">Contact us</span></NavLink></li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="text-center">
                            <li style={{ color: "tomato" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Contact US</h3></li>
                            
                            <ul className="list-unstyled text-white mt-3 m">
                                <li className="m-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">Mirpur, Dhaka</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">moboshop@gmail.com</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-2">01111111111</span></li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link text-center">
                                    <li style={{ color: "#E33156" }} className="list-unstyled mt-3 mb-5 fw-bolder text-center"><h3>Follow Us</h3></li>
                                    
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><h5>Facebook</h5></a>

                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><h5>Linkdin</h5></a>

                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><h5>Twitter</h5></a>

                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><h5>Instagram</h5></a>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <p><FontAwesomeIcon icon={faCopyright} /> 2021 | All Right Reserved | MOBOSHOP</p>
            </div>
            </div>
            </div>
    );
};

export default Footer;