import React from "react"
import { Container, Form } from "reactstrap"
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
    <Form>
      <GetStartedSignInTitle />
      <GetStartedSignInEmail />
      <GetStartedSignInButton />
      <GetStartedSignInLinkHaveAnAccount />
    </Form>
  </Container>
)

export default PageGetStartedForm
