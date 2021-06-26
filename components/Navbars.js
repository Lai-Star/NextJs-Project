import React from "react";
import { Link } from "next/link";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <div className="navbar-translate">
        <NavbarBrand to="/" id="navbar-brand" tag={Link}>
          <span>Ahmet Buğra Aydın • </span>
          <em>Frontend Developer</em>
        </NavbarBrand>
        <UncontrolledTooltip placement="bottom" target="navbar-brand">
          React || ReactNative
        </UncontrolledTooltip>
        <button
          aria-expanded={collapseOpen}
          className="navbar-toggler navbar-toggler"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <Collapse
        className={"justify-content-end " + collapseOut}
        navbar
        isOpen={collapseOpen}
        onExiting={onCollapseExiting}
        onExited={onCollapseExited}
      >
        <div className="navbar-collapse-header">
          <Row>
            <Col className="collapse-brand" xs="6">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Ahmet Buğra Aydın
              </a>
            </Col>
            <Col className="collapse-close text-right" xs="6">
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler"
                onClick={toggleCollapse}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </Col>
          </Row>
        </div>
        <Nav navbar>
          <NavItem className="p-0">
            <NavLink
              data-placement="bottom"
              href="https://github.com/bugraaydin1"
              rel="noopener noreferrer"
              target="_blank"
              title="Github"
              className="align-items-center"
            >
              <i className="fab fa-github mr-2" />
              <p className="d-lg-none d-xl-none">Github</p>
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              data-placement="bottom"
              href="https://www.linkedin.com/in/ahmetbugraaydin/"
              rel="noopener noreferrer"
              target="_blank"
              title="Linkedin"
              className="align-items-center"
            >
              <i className="fab fa-linkedin mr-2" />
              <p className="d-lg-none d-xl-none">Linkedin</p>
            </NavLink>
          </NavItem>
          <NavItem className="p-0">
            <NavLink
              data-placement="bottom"
              href="mailto:bugraaydin1@hotmail.com"
              rel="noopener noreferrer"
              target="_blank"
              title="Email"
              className="align-items-center"
            >
              <i className="fa fa-envelope mr-2" />
              <p className="d-lg-none d-xl-none">Email</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
