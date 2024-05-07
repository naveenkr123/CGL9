import React from "react";
import Wrapper from "../component/Wrapper";
import { Col, Container, Row } from "react-bootstrap";

function PlayerDetails() {
  return (
    <Wrapper>
      <section className="details_sec py-5">
        <Container>
          <div className="details_card">
            <h4>
              <i class="fa-solid fa-user me-3"></i>
              Player Code : <span id="player_code">205737</span>
            </h4>
            <p>
              <i class="fa-solid fa-circle-info me-1"></i> Please enter Player
              Code in game terminal.
            </p>
            <hr />

            <Row>
              <Col lg={4} md={6}>
                <div className="balance-box">
                  <h6>Player Balance</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign me-3"></i>
                    <span id="player_balance">15,000</span>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="point-box">
                  <h6>Player Points</h6>
                  <p>
                    <i class="fa-solid fa-coins me-3"></i>
                    <span id="player_balance">4,200</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Wrapper>
  );
}

export default PlayerDetails;
