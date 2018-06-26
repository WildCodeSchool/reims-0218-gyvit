import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "../NavbarLeft/NavbarLeft"
import NavbarTop from "../NavbarTop/NavbarTop"
import DashboardListCards from "../PageDashboard/DashboardListCards"

const PageDashboard = () => (
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
        <DashboardListCards />
      </Col>
    </Row>
  </Container>
)

export default PageDashboard
