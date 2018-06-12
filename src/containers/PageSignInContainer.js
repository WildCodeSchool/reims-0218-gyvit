import React from "react"
import { Row, Col, Container } from "reactstrap"
import { connect } from "react-redux"
import SignInBarLeft from "./SignInBarLeft"
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

export default connect()(PageSignIn)
