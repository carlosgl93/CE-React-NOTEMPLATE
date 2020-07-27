import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FontAwesomeIcon from "react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faWhatsapp } from "react-fontawesome";

export const Footer = () => (
    <Container>
        <Row>
            <Col sm={12}>
                <a href="tel:+56933963414">
                    <h6>+569 3396 3414</h6>
                </a>
                <h6>elequipo@cognitiveenglish.com</h6>
            </Col>
            <Col sm={12}>
                <h3 id="findus">Encuéntranos en</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/cognitiveenglish/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/cognitive-english/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/cognitiveenglish?igshid=8u5ed93den1b">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=56933963414&text=Hola%20Cognitive%20English,%20quiero%20saber%20m%C3%A1s%20">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
);
