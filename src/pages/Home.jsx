import React from "react";
import Wrapper from "../component/Wrapper";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import qr_code from "../assets/images/QR_Code.png";
import phones from "../assets/images/av-bg.jpg";
import android from "../assets/images/play_store.png";
import ios from "../assets/images/app_store.png";
import amazon from "../assets/images/amazon.png";
import ReviewCard from "../component/ReviewCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Wrapper>
      <div className="hero-sec py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h1>
                Join The <span>CGL9</span>
              </h1>
              <p>
                Upon registration, you will get a chance to spin the Free Play
                Wheel and enjoy our exciting games.
              </p>
              <button className="hero-btn">
                PLAY NOW <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="reward-sec py-5">
        <Container>
          <h3>OUR REWARDS</h3>
          <Row>
            <Col lg={4}>
              <div className="reward-card">
                <i className="fa-solid fa-gift"></i>
                <h5>Free Coupon</h5>
                <p>Get a free coupon on your next purchase!</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="reward-card">
                <i className="fa-solid fa-crown"></i>
                <h5>VIP Status</h5>
                <p>Achieve VIP status and enjoy exclusive benefits. </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="reward-card">
                <i className="fa-solid fa-trophy"></i>
                <h5>Gold Membership</h5>
                <p>Upgrade to Gold Membership for premium perks. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="join-sec py-5">
        <Container>
          <h3 className="text-center">HOW TO JOIN?</h3>
          <Row className="new_club">
            <Col md={6}>
              <div className="qr_box mx-auto ms-md-auto me-md-5">
                <img src={qr_code} alt="qr_code" />
              </div>
            </Col>
            <Col md={6} className="join_steps">
              <h5>New to the club?</h5>
              <div className="list_item">
                <div className="list_num">1</div>
                <p>Simply click on REGISTER</p>
              </div>
              <div className="list_item">
                <div className="list_num">2</div> <p>Scan the QR Code</p>
              </div>
              <div className="list_item">
                <div className="list_num">3</div>
                <p>Follow the prompts to get your player ID.</p>
              </div>
              <div className="list_item">
                <div className="list_num">4</div>
                <p>
                  Enter the player ID in the provided field and spin the wheel
                  to reveal your Free Play bonus.
                </p>
              </div>
            </Col>
          </Row>
          <div className="mt-5">
            <Row>
              <Col md={6} className="join_steps">
                <h5 className="member_heading">Already a member?</h5>
                <div className="list_item flex-row-reverse">
                  <div className="list_num">1</div>
                  <p>Just click on LOGIN</p>
                </div>
                <div className="list_item flex-row-reverse">
                  <div className="list_num">2</div> <p>Scan the QR Code</p>
                </div>
                <div className="list_item flex-row-reverse">
                  <div className="list_num">3</div>
                  <p>Enter your player ID</p>
                </div>
                <div className="list_item flex-row-reverse">
                  <div className="list_num">4</div>
                  <p className="last_point">
                    This will update your club information and may even grant
                    you an additional Free Play Wheel spin for more free games
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="qr_box mx-auto ms-md-5 me-md-auto">
                  <img src={qr_code} alt="qr_code" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="faq-sec py-5">
        <Container>
          <h3>Frequently Asked Questions</h3>
          <div className="acc_div mx-auto">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Question 1: What is online Casino?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Question 2: What is online Casino and why should we play these
                  games?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Question 3: What is online Casino and why should we play these
                  games?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Question 4: What is online Casino and why should we play these
                  games?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Question 5: What is online Casino?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>

      <div className="review-sec py-5">
        <Container>
          <h3>PLAYERS REVIEWS</h3>
          <Row>
            <Col md={6} lg={4}>
              <ReviewCard />
            </Col>
            <Col md={6} lg={4}>
              <ReviewCard />
            </Col>
            <Col md={6} lg={4}>
              <ReviewCard />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="available-sec py-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="side_img mb-5 mb-md-0">
                <img src={phones} alt="phones" />
              </div>
            </Col>
            <Col md={7} className="ps-md-5">
              <div>
                <h2>APP AVAILABLE ON</h2>
                <p>
                  Upon registration, you will get a chance to spin the Free Play
                  Wheel and enjoy our exciting games.
                </p>
                <div className="download_links">
                  <Row>
                    <Col xs={12}>
                      <Link to={"/"}>
                        <img src={android} alt="link" />
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to={"/"}>
                        <img src={ios} alt="link" />
                      </Link>
                    </Col>
                    <Col xs={12}>
                      {" "}
                      <Link to={"/"}>
                        <img
                          src={amazon}
                          alt="link"
                          className="border-1 border rounded-3"
                        />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact-sec py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="contact_card p-lg-5">
                <h3>Contact Us</h3>
                <form>
                  <Row>
                    <Col md={6}>
                      <div className="input_wrapper2">
                        <p>Firstname</p>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="input_wrapper2">
                        <p>Lastname</p>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="input_wrapper2">
                        <p>Email</p>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="input_wrapper2">
                        <p>Phone</p>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="input_wrapper2">
                        <p>Message</p>
                        <textarea rows="6" />
                      </div>
                    </Col>
                  </Row>
                  <button type="submit">Send</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
}

export default Home;
