//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col, Container } from "reactstrap"
import PropTypes from "prop-types"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfileContainer from "../../containers/NavbarTopProfileContainer"

const NavbarTop = ({ notif, profile }) => (
  <Container>
    <Row
      style={{
        height: "90px",
        backgroundColor: "#ffffff",
        border: "solid 1px #E5E8F4"
      }}
    >
      <Col xs="7">
        <NavbarTopSearch />
      </Col>
      <NavbarTopNotif {...notif} />

      <Col xs="3">
        <NavbarTopProfileContainer />
      </Col>
    </Row>
  </Container>
)

NavbarTop.propTypes = {
  notif: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default NavbarTop
