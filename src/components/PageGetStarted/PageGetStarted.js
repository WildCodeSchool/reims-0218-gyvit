import React from "react"
import { Row, Col, Container, Form } from "reactstrap"
import PageGetStartedForm from "./PageGetStartedForm"
import GetStartedSignInContent from "./GetStartedSignInContent"

const PageGetStarted = () => (
  <Container fluid>
    <Form>
      <Row>
        <Col md="4">
          <PageGetStartedForm />
        </Col>
        <Col md="8">
          <GetStartedSignInContent />
        </Col>
      </Row>
    </Form>
  </Container>
)

export default PageGetStarted
