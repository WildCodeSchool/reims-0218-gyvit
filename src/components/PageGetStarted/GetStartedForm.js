import React from "react"
import { Container, Form } from "reactstrap"
import GetStartedSignInEmail from "./GetStartedSignInEmail"
import GetStartedSignInTitle from "./GetStartedSignInTitle"
import GetStartedSignInButton from "./GetStartedSignInButton"
import GetStartedSignInLinkHaveAnAccount from "./GetStartedSignInLinkHaveAnAccount"

const GetStartedForm = () => (
  <Container
    style={{
      "padding-top": "75%",
      "margin-left": "5%",
      "background-color": "#ffffff",
      "margin-right": "10%"
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

export default GetStartedForm
