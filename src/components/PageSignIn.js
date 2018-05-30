import React from "react"
import { Row, Container } from "reactstrap"
import SignInButton from "./SignInButton"
import SignInTitle from "./SignInTitle"
import SignInEmail from "./SignInEmail"
import SignInGetStarted from "./SignInGetStarted"

const PageSignIn = () => (
  <Container>
    <Row>
      <div className="ml-3 mr-3">
        <SignInTitle />
        <SignInEmail />
        <SignInButton />
        <SignInGetStarted />
      </div>
    </Row>
  </Container>
)

export default PageSignIn
