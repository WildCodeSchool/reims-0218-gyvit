import React from "react"
import { Container, Row, Col } from "reactstrap"
import PropTypes from "prop-types"

import DashboardCard from "./DashboardCard"
import { elements } from "../../links/elements"

const DashboardListCards = ({ firstname }) => (
  <Container>
    <Row className="App">
      <Col md="12" sm="4">
        <p
          style={{
            fontSize: "24px",
            height: "33px",
            marginTop: "20%",
            textAlign: "center"
          }}
        >
          Welcome to Gyvit, {firstname}.
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
      {elements.map(element => <DashboardCard {...element} />)}
    </Row>
  </Container>
)

DashboardListCards.propTypes = {
  elements: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

export default DashboardListCards
