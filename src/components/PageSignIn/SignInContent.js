import React from "react"
import { Button, Row, Container, Col } from "reactstrap"
import "./styles-page-sign-in/signInContent.css"

const SignInContent = () => (
  <div className="d-none d-md-block d-xl-block  signInContent">
    <Container>
      <Row style={{ paddingTop: "2vh" }}>
        <Col xs="9" className="d-flex align-items-center">
          <a
            className="textAccount"
            style={{
              paddingLeft: "20em",
              fontsize: "16px",
              width: "100vw",
              color: "#3b425d"
            }}
            href="/sign-up"
          >
            Don't have an account ?
          </a>
        </Col>
        <Col xs="3">
          <Button
            className="buttonContent"
            style={{
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "#7a57d1",
              marginRight: "5px"
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
