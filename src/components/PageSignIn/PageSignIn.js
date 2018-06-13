import React from "react"
import { Row, Col, Container } from "reactstrap"
import SignInBarLeft from "./SignInBarLeft"
import SignInContent from "./SignInContent"

const PageSignIn = () => (
  <Container fluid>
    <Row>
      
      <Col md="6" lg="6" sm="6">
        <SignInBarLeft />
      </Col>
      <Col md="6" lg="6" sm="6">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
