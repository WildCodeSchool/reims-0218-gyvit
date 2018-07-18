import React from "react"
import { Container } from "reactstrap"
import SignInTitle from "./SignInTitle"
import SignInGetStarted from "./SignInGetStarted"
import SignInFormContainer from "../../containers/SignInFormContainer"
import "./styles-page-sign-in/signInBarLeft.css"

const PageSignIn = () => (
  <Container className="pageSignIn">
    <SignInTitle />
    <SignInFormContainer />

    <SignInGetStarted />
  </Container>
)

export default PageSignIn
