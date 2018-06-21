import React from "react"
import { Row, Col, Container } from "reactstrap"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import DashboardListCards from "./DashboardListCards"

const PageDashboardCards = () => (
  <Container fluid>
    <Row>
      <Col xs="2">
        <NavbarLeft />
      </Col>
      <Col xs="10">
        <NavbarTop />
        <DashboardListCards />
      </Col>
    </Row>
  </Container>
)

export default PageDashboardCards
