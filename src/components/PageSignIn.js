import React from "react"
import { Row, Container, Col } from "reactstrap"
import SignInButton from "./SignInButton"
import SignInTitle from "./SignInTitle"
import SignInEmail from "./SignInEmail"
import SignInGetStarted from "./SignInGetStarted"

const PageSignIn = () => (
  <Container
    style={{
      "margin-top": "290px",
      "margin-left": "60px",
      "background-color": "#ffffff",
      "box-shadow": "0 3px 14px 0 rgba(224, 227, 240, 0.6)"
    }}
  >
    <Row>
      <Col md="4">
        <div className="ml-3 mr-3">
          <SignInTitle />
          <SignInEmail />
          <SignInButton />
          <SignInGetStarted />
        </div>
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
