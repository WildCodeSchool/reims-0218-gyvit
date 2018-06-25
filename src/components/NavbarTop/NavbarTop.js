//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col, Container } from "reactstrap"
// import PropTypes from "prop-types"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopProfileContainer from "../../containers/NavbarTopProfileContainer"
import SearchContainer from "../../containers/SearchContainer"

const NavbarTop = () => (
  <Container fluid>
    <Row
      style={{
        height: "90px",
        backgroundColor: "#ffffff",
        border: "solid 1px #E5E8F4"
      }}
    >
      <Col xs="10">
        <SearchContainer />
      </Col>
      <Col xs="1">
        <NavbarTopNotif />
      </Col>
      <Col xs="1">
        <NavbarTopProfileContainer />
      </Col>
    </Row>
  </Container>
)

export default NavbarTop
