//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col, Container } from "reactstrap"
// import PropTypes from "prop-types"
import NavbarTopNotifContainer from "../../containers/NavbarTopNotifContainer"
import NavbarTopProfileContainer from "../../containers/NavbarTopProfileContainer"
import SearchContainer from "../../containers/SearchContainer"

const NavbarTop = () => (
  <Container>
    <Row
      style={{
        height: "90px",
        backgroundColor: "#ffffff",
        border: "solid 1px #E5E8F4"
      }}
    >
      <Col xs="7">
        <SearchContainer />
      </Col>
      <NavbarTopNotifContainer />
      <Col xs="3">
        <NavbarTopProfileContainer />
      </Col>
    </Row>
  </Container>
)

export default NavbarTop
