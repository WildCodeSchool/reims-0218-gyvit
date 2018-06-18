//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col, Container } from "reactstrap"
import PropTypes from "prop-types"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

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
        <NavbarTopSearch />
      </Col>
      <NavbarTopNotif notifsCount={66} />

      <Col xs="3">
        <NavbarTopProfile
          firstname="Pierre"
          lastname="Dumay"
          business="Wild Code School"
        />
      </Col>
    </Row>
  </Container>
)

NavbarTop.propTypes = {
  notif: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default NavbarTop
