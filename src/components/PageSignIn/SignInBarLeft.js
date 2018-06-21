import React from "react"
import { Container } from "reactstrap"
import SignInTitle from "./SignInTitle"
import SignInGetStarted from "./SignInGetStarted"
import SignInFormContainer from "../../containers/SignInFormContainer"

const PageSignIn = () => (
  <Container
    style={{
      paddingTop: "290px",
      marginLeft: "10%",
      backgroundColor: "#ffffff",
      marginRight: "50px"
    }}
  >
    <SignInTitle />
    <SignInFormContainer />

    <SignInGetStarted />
  </Container>
)

export default PageSignIn
