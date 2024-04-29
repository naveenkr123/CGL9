import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <Row>
          <Col lg={5} className="pe-0">
            <div className="p-4 side_banner d-none d-lg-block"></div>
          </Col>
          <Col lg={7}>
            <div className="p-4 login_div">
              <Modal.Header closeButton>Register</Modal.Header>
              <h6 className="py-4 fw-semibold">
                Create your account in few easy steps. It only takes a minute.
              </h6>
              <form>
                <Row>
                  <Col md={6} className="input_wrapper">
                    <p>Firstname</p>
                    <input type="text" />
                  </Col>
                  <Col md={6} className="input_wrapper">
                    <p>Lastname</p>
                    <input type="text" />
                  </Col>
                  <Col lg={12} className="input_wrapper">
                    <p>Email</p>
                    <input type="text" />
                  </Col>
                  <Col lg={12} className="input_wrapper">
                    <p>Phone</p>
                    <input type="text" />
                  </Col>
                  <Col lg={12} className="input_wrapper">
                    <p>Password</p>
                    <input type="text" />
                  </Col>
                </Row>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label note"
                    htmlFor="flexCheckDefault"
                  >
                    I agree to CGL9 Terms and Conditions and Privacy Policy.
                  </label>
                </div>
                <button className="rbtn" type="submit">
                  Register
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
function AnotherVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <Row>
          <Col lg={6} className="pe-0">
            <div className="p-4 side_banner d-none d-lg-block"></div>
          </Col>
          <Col lg={6}>
            <div className="p-4 login_div">
              <Modal.Header closeButton>Log In</Modal.Header>
              <form>
                <Row>
                  <Col lg={12} className="input_wrapper mt-4">
                    <p>Email</p>
                    <input type="text" />
                  </Col>
                  <Col lg={12} className="input_wrapper">
                    <p>Password</p>
                    <input type="text" />
                  </Col>
                </Row>
                <button type="submit" className="lbtn">
                  Login
                </button>
              </form>
              <div className="w-100 d-flex justify-content-center">
                <Link to={"/"} className="lgn_link">
                  Forgot Password?
                </Link>
              </div>

              <div className="w-100 d-flex justify-content-center">
                <p className="d-flex mt-3">
                  Don't have an account?{" "}
                  <Link to={"/"} className="d-block ms-2 lgn_link">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [anotherModalShow, setAnotherModalShow] = useState(false);

  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">CGL9</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#how-to-join">How to Join</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
            <Nav.Link href="#login-register">
              <button
                className="login-btn"
                onClick={() => setAnotherModalShow(true)}
              >
                LOGIN
              </button>
              <button
                className="reg-btn ms-3"
                onClick={() => setModalShow(true)}
              >
                REGISTER
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <AnotherVerticallyCenteredModal
        show={anotherModalShow}
        onHide={() => setAnotherModalShow(false)}
      />
    </Navbar>
  );
}

export default Header;
