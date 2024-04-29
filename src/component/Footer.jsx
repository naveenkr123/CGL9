import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer pt-5">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="footer_logo">
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <h3>CGL9</h3>
          </Col>
          <Col lg={3}>
            <div className="mt-4 mt-lg-0">
              <h5>Quick Links</h5>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>About Us</Link>
              <Link to={"/"}>Privacy Policy</Link>
              <Link to={"/"}>Terms & Conditions</Link>
            </div>
          </Col>
          <Col lg={3}>
            <div className="mt-4 mt-lg-0">
              <h5>Contact Us</h5>
              <Link to={"/"}>123 Street Name City, State, Country</Link>
              <Link to={"/"}>example@example.com</Link>
              <Link to={"/"}>example@example.com</Link>
              <Link to={"/"}>+91 998877XXXX</Link>
            </div>
          </Col>
          <Col lg={3}>
            <div className="mt-4 mt-lg-0">
              <h5>Social Links</h5>
              <div className="d-flex social_icons">
                <Link to={"/"}>
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to={"/"}>
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to={"/"}>
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to={"/"}>
                  <i className="fa-brands fa-telegram"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyright_info">
          <p>&#169; 2024 | All Right Reserved | CGL9.com</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
