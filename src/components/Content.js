import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

import DashboardCard from "./DashboardCard"

const Content = ({ elements, name }) => (
  <Container>
    <Row className="App">
      <Col sm="12">
        <h1>Welcome to Gyvit, {name}.</h1>
      </Col>
      <Col sm="12">
        <h2>What would you like to do ?</h2>
      </Col>
    </Row>
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
