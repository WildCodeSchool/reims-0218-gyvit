import React from "react"

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
      {elements.map(element => {
        console.log(element)
        return (
          <Col xs="4">
            <DashboardCard key={element.id} contenu={element} />
          </Col>
        )
      })}
    </Row>
  </Container>
)
export default Content
