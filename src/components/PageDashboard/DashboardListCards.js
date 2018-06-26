import React from "react"
import { Container, Row, Col } from "reactstrap"

import DashboardCard from "./DashboardCard"
import { elements } from "../../links/elements"

const DashboardListCards = ({ mail, firstname }) => (
  <Container fluid>
    <Row>
      <Col md="12">
        <p
          style={{
            fontSize: "24px",
            height: "33px",
            marginTop: "5%",
            textAlign: "center"
          }}
        >
          Welcome to Gyvit, Romain.
        </p>

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
    <Row className="d-flex justify-content-around">
      {elements.map((element, index) => (
        <DashboardCard key={index} {...element} />
      ))}
    </Row>
  </Container>
)

export default DashboardListCards
