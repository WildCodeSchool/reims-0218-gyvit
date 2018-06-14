import React from "react"
import { Button, Row, Container, Col } from "reactstrap"

const SignInContent = () => (
  <div
    class="d-none d-xl-block d-lg-none"
    style={{
      width: "max-width",
      height: "100%",
      backgroundImage:
        "url('https://www.onecomputer.fr/wp-content/uploads/2016/01/blurred-background-81.jpg')",
      position: "relative"
    }}
  >
    <Container >
      <Row>
        <Col xs="7">
          <p
            style={{
              marginTop: "10%",
              fontSize: "16px",
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              textAlign: "left",
              color: "#3b425d",
              position: "absolute",
<<<<<<< HEAD
              marginLeft: "70%"
=======
              marginLeft: "50%"
>>>>>>> 05d60f37c8a891e90fab78f937ac9eb1a49906da
            }}
          >
            Don't have an account ?
          </p>
        </Col>
        <Col xs="5">
          <Button
            outline
            style={{
              width: "156px",
              height: "54px",
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "#7a57d1",
              marginTop: "10%"
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
