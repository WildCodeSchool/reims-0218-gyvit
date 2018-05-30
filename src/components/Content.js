import React from "react"

import { Container, Row, Col } from "reactstrap"

import DashboardCard from "./DashboardCard"

const Content = ({ elements, name }) => (
  <Container>
    <Row className="App">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h1>Welcome to Gyvit, {name}.</h1>
      </Col>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>What would you like to do ?</h2>
      </Col>
    </Row>
    <Row>
      {elements.map(element => {
        return (
          <Col xs="6" sm="4">
            <DashboardCard key={element.id} contenu={element} />
          </Col>
        )
      })}
    </Row>
  </Container>
)
export default Content
