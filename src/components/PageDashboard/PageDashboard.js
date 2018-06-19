import React from "react"
import { Container, Row, Col } from "reactstrap"

import NavbarLeft from "../NavbarLeft/NavbarLeft"
import DashboardListCards from "../PageDashboard/DashboardListCards"
import NavBarTopProfileContainer from "../container/NavBarTopProfileContainer"
import links from "../../links"

const PageDashboard = ({ datalink, notif, profile, elements, name }) => (
  <Container fluid>
    <Row>
      <Col xs="2">
        <NavbarLeft dataLinks={links} />
      </Col>
      <Col xs="10">
        <NavBarTopProfileContainer />
        <DashboardListCards elements={elements} name={name} />
      </Col>
    </Row>
  </Container>
)

export default PageDashboard
