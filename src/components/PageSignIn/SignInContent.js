import React from "react"
import { Button, Row, Container, Col } from "reactstrap"
import "./styles-page-sign-in/signInContent.css"

const SignInContent = () => (
  <div className="d-none d-md-block d-xl-block d-lg-none signInContent">
    <Container className="d-md-none  d-xl-block d-lg-none">
      <Row style={{ paddingTop: "2vh" }}>
        <Col xs="8" className="d-flex align-items-center">
          <a className="textAccount" style={{
              paddingLeft: "50%",
              fontsize: "16px",
              width: "100vw",
              color: "#3b425d"
            }}  href="/sign-up">
            Don't have an account ?
          </a>
        </Col>
        <Col xs="4">
          <Button
            className="buttonContent"
            style={{
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "#7a57d1"
            }}
            href="sign-up"
            outline
          >
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SignInContent
