import React from "react"
import { Container, Row, Col } from "reactstrap"
import PropTypes from "prop-types"

import DashboardCard from "./DashboardCard"

const listCardsInHome = [
  {
    id: 0,
    image: "/img/request.png",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Create first request",
    link: "lien0"
  },
  {
    id: 1,
    image: "/img/share.png",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Share documents",
    link: "lien1"
  },
  {
    id: 2,
    image: "/img/store.png",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Upload documents",
    link: "lien2"
  }
]

const DashboardListCards = ({ name }) => (
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
          Welcome to Gyvit, {name}.
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
      {listCardsInHome.map(element => <DashboardCard {...element} />)}
    </Row>
  </Container>
)

DashboardListCards.propTypes = {
  elements: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

export default DashboardListCards
