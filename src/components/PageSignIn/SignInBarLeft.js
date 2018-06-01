import React from "react"
import { Container } from "reactstrap"
import SignInButton from "./SignInButton"
import SignInTitle from "./SignInTitle"
import SignInEmail from "./SignInEmail"
import SignInGetStarted from "./SignInGetStarted"

const PageSignIn = () => (
  <Container
    style={{
      paddingTop: "290px",
      marginLeft: "30px",
      backgroundColor: "#ffffff",
      marginRight: "50px"
    }}
  >
    <SignInTitle />
    <SignInEmail />
    <SignInButton />
    <SignInGetStarted />
  </Container>
)

export default PageSignIn
