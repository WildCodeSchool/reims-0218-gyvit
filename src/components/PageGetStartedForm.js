import React from "react"
import { Container } from "reactstrap"
import GetStartedSignInEmail from "./GetStartedSignInEmail"
import GetStartedSignInTitle from "./GetStartedSignInTitle"
import GetStartedSignInButton from "./GetStartedSignInButton"
import GetStartedSignInLinkHaveAnAccount from "./GetStartedSignInLinkHaveAnAccount"

const PageGetStartedForm = () => (
  <Container
    style={{
      "padding-top": "25%",
      "margin-left": "30px",
      "background-color": "#ffffff",
      "margin-right": "50px"
    }}
  >
    <div>
      <GetStartedSignInTitle />
      <GetStartedSignInEmail />
      <GetStartedSignInButton />
      <GetStartedSignInLinkHaveAnAccount />
    </div>
  </Container>
)

export default PageGetStartedForm
