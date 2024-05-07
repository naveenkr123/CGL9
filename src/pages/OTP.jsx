import React from "react";
import Wrapper from "../component/Wrapper";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function OTP() {
  return (
    <Wrapper>
      <Container>
        <div className="otp_sec">
          <div className="otp_box">
            <h4>OTP Verification</h4>
            <p>
              OTP has been sent via Email to <span>example@example.com</span>
            </p>
            <input type="text" placeholder="Enter OTP" />
            <button>Verify OTP</button>
            <Link to={"#"}>Resend OTP</Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default OTP;
