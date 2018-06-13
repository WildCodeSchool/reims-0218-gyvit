import React from "react"
import { Row, Col, Container } from "reactstrap"
import SignInBarLeft from "./SignInBarLeft"
import SignInContent from "./SignInContent"

const PageSignIn = () => (
  <Container fluid>
    <Row>
      
      <Col md="4" lg="4" sm="4">
        <SignInBarLeft />
      </Col>
      <Col md="8" lg="8" sm="8">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
