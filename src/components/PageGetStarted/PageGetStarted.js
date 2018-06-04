import React from "react"
import { Row, Col, Container, Form } from "reactstrap"
import GetStartedForm from "./GetStartedForm"
import GetStartedSignInContent from "./GetStartedSignInContent"

const PageGetStarted = () => (
  <Container fluid>
    <Form>
      <Row>
        <Col md="4">
          <GetStartedForm />
        </Col>
        <Col md="8">
          <GetStartedSignInContent />
        </Col>
      </Row>
    </Form>
  </Container>
)

export default PageGetStarted
