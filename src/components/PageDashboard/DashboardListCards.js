import React from "react"

import { Container, Row, Col } from "reactstrap"

import DashboardCard from "./DashboardCard"

const DashboardListCards = ({ elements, name }) => (
  <Container>
    <Row className="App">
      <Col sm="12" md={{ size: 4, offset: 3 }}>
        <p
          style={{
            fontSize: "24px",
            height: "33px",
            marginTop: "120px",
            textAlign: "center"
          }}
        >
          Welcome to Gyvit, {name}.
        </p>
      </Col>
      <Col sm="12" md={{ size: 4, offset: 3 }}>
        <p
          style={{
            fontSize: "18px",
            height: "24px",
            textAlign: "center",
            color: "#000000",
            opacity: 0.45,
            marginBottom: "60px"
          }}
        >
          What would you like to do ?
        </p>
      </Col>
    </Row>
    <Row>
      {elements.map(element => {
        return <DashboardCard key={element.id} contenu={element} />
      })}
    </Row>
  </Container>
)
export default DashboardListCards
