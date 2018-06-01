import React from "react"
import { Button, Row, Container, Col } from "reactstrap"

const GetStartedSignInContent = () => (
  <div
    style={{
      height: "100vh",
      backgroundImage:
        "url('https://www.onecomputer.fr/wp-content/uploads/2016/01/blurred-background-81.jpg')",
      position: "relative"
    }}
  >
    <Container fluid>
      <Row>
        <Col xs="9">
          <p
            style={{
              "margin-top": "49px",
              "font-size": "16px",
              "font-weight": "normal",
              "font-style": "normal",
              "letter-spacing": "normal",
              "text-align": "left",
              color: "#3b425d",
              position: "absolute",
              "margin-left": "70%"
            }}
          >
            Already have an account ?
          </p>
        </Col>
        <Col xs="3">
          <Button
            outline
            style={{
              width: "156px",
              height: "54px",
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "#7a57d1",
              "margin-top": "30px"
            }}
          >
            Sign in
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default GetStartedSignInContent
