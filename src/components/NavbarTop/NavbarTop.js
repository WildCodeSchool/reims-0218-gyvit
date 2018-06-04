//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const NavbarTop = ({ notif, profile }) => (
  <Row
    style={{
      height: "90px",
      "background-color": "#ffffff",
      border: "solid 1px #E5E8F4"
    }}
  >
    <Col xs="7">
      <NavbarTopSearch />
    </Col>
    <Col xs="2">
      <NavbarTopNotif {...notif} />
    </Col>
    <Col xs="3">
      <NavbarTopProfile {...profile} />
    </Col>
  </Row>
)

NavbarTop.propTypes = {
  notif: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default NavbarTop
