import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "../NavbarLeft/NavbarLeft"
import DashboardListCards from "../PageDashboard/DashboardListCards"
import NavbarTop from "../NavbarTop/NavbarTop"

const PageDashboard = ({ notif, profile, name }) => (
  <Container fluid>
    <Row>
      <Col xs="2">
        <NavbarLeft />
      </Col>
      <Col xs="10">
        <NavbarTop notif={notif} profile={profile} />
        {/*no props here (import links in DashboardListCards)*/}
        <DashboardListCards {...name} />
      </Col>
    </Row>
  </Container>
)

export default PageDashboard
