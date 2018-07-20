import React from "react"
import { Row, Col, Container } from "reactstrap"
import SignInBarLeft from "./SignInBarLeft"
import SignInContent from "./SignInContent"
import ModalErrorContainer from "../../containers/ModalErrorContainer"
const PageSignIn = () => (
  <Container fluid>
    <ModalErrorContainer />
    <Row>
      <Col md="5" lg="5" sm="5">
        <SignInBarLeft />
      </Col>
      <Col md="7" lg="7" sm="7">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default PageSignIn
