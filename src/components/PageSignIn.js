import React from "react"
import { Container, Row, Col } from "reactstrap"
import SignInBarLeft from "../components/SignInBarLeft"
import SignInContent from "./SignInContent"

const PageSignIn = () => (
  <Container fluid>
    <Row>
      <Col md="5">
        <SignInBarLeft />
      </Col>
      <Col md="7">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
