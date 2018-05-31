import React from "react"
import { Row, Col, Container } from "reactstrap"
import PageGetStartedForm from "./PageGetStartedForm"
import GetStartedSignInContent from "./GetStartedSignInContent"

const PageGetStarted = () => (
  <Container fluid>
    <Row>
      <Col md="4">
        <PageGetStartedForm />
      </Col>
      <Col md="8">
        <GetStartedSignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageGetStarted
