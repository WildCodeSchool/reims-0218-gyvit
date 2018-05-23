import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

import DashboardCard from "./DashboardCard"

const Content = ({ elements }) => (
  <Container>
    <Row>
      <Col xs="4">
        <DashboardCard contenu={elements[0]} />
      </Col>
      <Col xs="4">
        <DashboardCard contenu={elements[1]} />
      </Col>
      <Col xs="4">
        <DashboardCard contenu={elements[2]} />
      </Col>
    </Row>
  </Container>
)
export default Content
