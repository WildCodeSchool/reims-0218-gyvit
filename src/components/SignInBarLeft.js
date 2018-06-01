import React from "react"
import { Container } from "reactstrap"
import SignInButton from "./SignInButton"
import SignInTitle from "./SignInTitle"
import SignInEmail from "./SignInEmail"
import SignInGetStarted from "./SignInGetStarted"

const PageSignIn = () => (
  <Container
    style={{
      "padding-top": "290px",
      "margin-left": "30px",
      "background-color": "#ffffff",
      "margin-right": "50px"
    }}
  >
    <SignInTitle />
    <SignInEmail />
    <SignInButton />
    <SignInGetStarted />
  </Container>
)

export default PageSignIn
