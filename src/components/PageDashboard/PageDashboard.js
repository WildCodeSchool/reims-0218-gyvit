import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "../NavbarLeft/NavbarLeft"
import DashboardListCards from "../PageDashboard/DashboardListCards"
import NavbarTop from "../NavbrTop/NavbarTop"
import links from "../../links"

const PageDashboard = ({ datalink, notif, profile, elements, name }) => (
  <Container fluid>
    <Row>
      <Col xs="2">
        {/*no props here (import links in NavbarLeft)*/}
        <NavbarLeft dataLinks={links} />
      </Col>
      <Col xs="10">
        <NavbarTop notif={notif} profile={profile} />
        {/*no props here (import links in DashboardListCards)*/}
        <DashboardListCards elements={elements} name={name} />
      </Col>
    </Row>
  </Container>
)

export default PageDashboard
