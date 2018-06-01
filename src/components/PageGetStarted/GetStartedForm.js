import React from "react"
import { Container } from "reactstrap"
import GetStartedSignInEmail from "./GetStartedSignInEmail"
import GetStartedSignInTitle from "./GetStartedSignInTitle"
import GetStartedSignInButton from "./GetStartedSignInButton"
import GetStartedSignInLinkHaveAnAccount from "./GetStartedSignInLinkHaveAnAccount"

const GetStartedForm = () => (
  <Container
    style={{
      paddingTop: "25%",
      marginLeft: "30px",
      backgroundColor: "#ffffff",
      marginRight: "50px"
    }}
  >
    <GetStartedSignInTitle />
    <GetStartedSignInEmail />
    <GetStartedSignInButton />
    <GetStartedSignInLinkHaveAnAccount />
  </Container>
)

export default GetStartedForm
