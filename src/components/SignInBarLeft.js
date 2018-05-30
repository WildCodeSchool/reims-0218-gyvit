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
      "margin-left": "60px",
      "background-color": "#ffffff",
      height: "1067px",
      width: "460px"
    }}
  >
    <SignInTitle />
    <SignInEmail />
    <SignInButton />
    <SignInGetStarted />
  </Container>
)

export default PageSignIn
