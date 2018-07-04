import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "../NavbarLeft/NavbarLeft"
import NavbarTop from "../NavbarTop/NavbarTop"
import InConstruction from "./InConstruction"

const PageSettings = () => (
  <Container fluid>
    <Row>
      <Col
        xs="2"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          height: "100%"
        }}
      >
        <NavbarLeft />
      </Col>
      <Col
        xs="10"
        style={{
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <NavbarTop />
        <InConstruction />
      </Col>
    </Row>
  </Container>
)

export default PageSettings
