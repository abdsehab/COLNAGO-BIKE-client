import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import rightImg from './../../../Assets/phone-1.png';

const Customize = () => {
    return (
        <div>
            {/* <div style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}>
                <h1 className="text-white text-center p-5">About Us</h1>
            </div> */}
            <Container className="mt-4">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1>Realme Narzo 20</h1>
                        <h2>Best Ever From Realme</h2><br />
                            <p>The Narzo 20 is therefore much easier to recommend than its cousins, and a much stronger offering in its segment. Starting at just over Rs. 10,000 this is a decent phone with great battery life and good enough performance for occasional gaming.</p>                       
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div>
                                <img className="mx-auto mt-3 img-fluid" src={rightImg} alt="" />
                            
                        </div>
                    </Col>
                </Row >
            </Container >
        </div>
    );
};

export default Customize;