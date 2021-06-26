/*!
=========================================================
* BLK Design System React - v1.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)
* Coded by Creative Tim
*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Row className="m-1 mb-n1 ">
        <Col md="4" className="p-5">
          <Row>
            <img src="/aba-logo-alpha.png" className="mb-2" alt="ABA Logo" />
          </Row>
          <Row>
            <span className="text-center">Ahmet Buğra Aydın - 2021</span>
          </Row>
        </Col>
        <Col md="4">
          <Nav className="ml-4">
            <NavItem>
              <NavLink href="#my-profile">Profilim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#my-projects">Projelerim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact-us">İLETİŞİM</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md="4">
          <h3 className="title">Takip edin</h3>
          <div className="btn-wrapper profile">
            <Button
              className="btn-icon btn-neutral btn-round p-2 btn-simple btn-twitter"
              id="tooltip622135962"
              href="https://www.linkedin.com/in/ahmetbugraaydin/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip622135962">
              Linkedin
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-neutral btn-round p-2 btn-simple btn-github"
              href="https://github.com/bugraaydin1"
              id="tooltip230450801"
              target="_blank"
            >
              <i className="fab fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip230450801">
              Github
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-neutral btn-round p-2 btn-simple btn-facebook"
              href="mailto:bugraaydin1@hotmail.com"
              id="tooltip318450378"
              target="_blank"
            >
              <i className="fa fa-envelope" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip318450378">
              Email
            </UncontrolledTooltip>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
