import React from "react"
import { Container } from "reactstrap"
import ForgotPasswordBackToSignIn from "./ForgotPasswordBackToSignIn"
import ForgotPasswordTitle from "./ForgotPasswordTitle"
import ForgotPasswordEmail from "./ForgotPasswordEmail"
import ForgotPasswordButton from "./ForgotPasswordButton"
import ForgotPasswordGetStarted from "./ForgotPasswordGetStarted"

const ForgotPasswordBarLeft = () => (
  <Container
    style={{
      "margin-left": "30px",
      "background-color": "#ffffff",
      "margin-right": "10px"
    }}
  >
    <ForgotPasswordBackToSignIn />
    <ForgotPasswordTitle />
    <ForgotPasswordEmail />
    <ForgotPasswordButton />
    <ForgotPasswordGetStarted />
  </Container>
)

export default ForgotPasswordBarLeft
