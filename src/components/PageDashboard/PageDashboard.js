import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "./components/NavbarLeft/NavbarLeft"
import NavbarLeftLogo from "/components/NavbarLeftLogo/NavbarLeftLogo"
import DashboardListCards from "./components/DashboardListCards/DashboardListCards"
import NavbarTop from "./components/NavbarTop/NavbarTop"

const PageDashboard = () => (
  <Container>
    <Row>
      <Col xs="2">
        <NavbarLeftLogo />
        <NavbarLeft />
      </Col>
      <Col xs="10">
        <NavbarTop />
        <DashboardListCards />
      </Col>
    </Row>
  </Container>
)

export default PageDashboard
