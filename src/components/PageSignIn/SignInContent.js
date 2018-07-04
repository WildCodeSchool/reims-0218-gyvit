import React from "react"
import { Button, Row, Container, Col } from "reactstrap"

const SignInContent = () => (
  <div
    className="d-none d-md-block d-xl-block d-lg-none"
    style={{
      width: "max-width",
      height: "100vh",
      backgroundImage:
        "url('https://www.onecomputer.fr/wp-content/uploads/2016/01/blurred-background-81.jpg')",
      position: "relative"
    }}
  >
    <Container className="d-md-none  d-xl-block d-lg-none">
      <Row style={{ paddingTop: "2vh" }}>
        <Col xs="8" className="d-flex align-items-center">
          <a
            href="/sign-up"
            style={{
              paddingLeft: "50%",
              fontSize: "16px",
              width: "100vw",
              color: "#3b425d"
            }}
          >
            Don't have an account ?
          </a>
        </Col>
        <Col xs="4">
          <Button
            href="sign-up"
            outline
            style={{
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "#7a57d1"
            }}
          >
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SignInContent
