import React from "react"
import { Container, Row } from "reactstrap"
import SignInBarLeft from "../components/SignInBarLeft"
import SignInContent from "./SignInContent"

const PageSignIn = () => (
  <Container>
    <Row>
      <SignInBarLeft />
      <SignInContent />
    </Row>
  </Container>
)

export default PageSignIn
