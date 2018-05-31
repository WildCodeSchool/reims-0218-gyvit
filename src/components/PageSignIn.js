import React from "react"
import { Row, Col, Container } from "reactstrap"
import SignInBarLeft from "../components/SignInBarLeft"
import SignInContent from "./SignInContent"

const PageSignIn = () => (
  <Container fluid>
    <Row>
      <Col md="4">
        <SignInBarLeft />
      </Col>
      <Col md="8">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
