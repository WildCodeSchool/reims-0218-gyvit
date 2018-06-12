import React from "react"
import { Container } from "reactstrap"
import SignInTitle from "./SignInTitle"
import SignInForm from "./SignInForm"
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
    <SignInForm />
  
    <SignInGetStarted />
  </Container>
)

export default PageSignIn
