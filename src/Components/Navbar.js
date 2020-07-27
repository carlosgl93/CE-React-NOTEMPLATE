import React from "react";
import { Navbar } from "react-bootstrap";
import { logoText } from "../img/logoText.png";
import { logoImg } from "../img/logoImg.png";

export const Nav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logoImg}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Cognitive English logo"
                />
                <img
                    src={logoText}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Cognitive English logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Planes</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <Nav.Link href="#pricing">Corporativo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
