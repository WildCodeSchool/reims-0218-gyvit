import React from "react"
import { Container, Row, Col } from "reactstrap"
import ForgotPasswordBarLeft from "./ForgotPasswordBarLeft"
import ForgotPasswordContent from "./ForgotPasswordContent"

const PageForgotPassword = () => (
  <Container fluid>
    <Row>
      <Col md="4">
        <ForgotPasswordBarLeft />
      </Col>
      <Col md="8">
        <ForgotPasswordContent />
      </Col>
    </Row>
  </Container>
)

export default PageForgotPassword
