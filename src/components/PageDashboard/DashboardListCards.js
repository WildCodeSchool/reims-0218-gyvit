import React from "react"
import { Container, Row } from "reactstrap"

import DashboardCard from "./DashboardCard"
import DashboardDisplayNameContainer from "../../containers/DashboardDisplayNameContainer"
import { elements } from "../../links/elements"

const DashboardListCards = () => (
  <Container fluid>
    <Row>
      <DashboardDisplayNameContainer />
    </Row>
    <Row className="d-flex justify-content-around">
      {elements.map((element, index) => (
        <DashboardCard key={index} {...element} />
      ))}
    </Row>
  </Container>
)

export default DashboardListCards
