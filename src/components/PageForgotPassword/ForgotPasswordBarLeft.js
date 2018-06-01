import React from "react"
import { Container, Form } from "reactstrap"
import ForgotPasswordBackToSignIn from "./ForgotPasswordBackToSignIn"
import ForgotPasswordTitle from "./ForgotPasswordTitle"
import ForgotPasswordEmail from "./ForgotPasswordEmail"
import ForgotPasswordButton from "./ForgotPasswordButton"
import ForgotPasswordGetStarted from "./ForgotPasswordGetStarted"

const ForgotPasswordBarLeft = () => (
  <Container
    style={{
      marginLeft: "30px",
      backgroundColor: "#ffffff",
      marginRight: "10px"
    }}
  >
    <Form>
      <ForgotPasswordBackToSignIn />
      <ForgotPasswordTitle />
      <ForgotPasswordEmail />
      <ForgotPasswordButton />
      <ForgotPasswordGetStarted />
    </Form>
  </Container>
)

export default ForgotPasswordBarLeft
