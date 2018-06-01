//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import PropTypes from "prop-types"
import { Nav } from "reactstrap"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const NavbarTop = ({ notif, profile }) => (
  <Nav
    style={{
      height: "90px",
      backgroundColor: "#ffffff",
      border: "solid 1px #e5e8f4"
    }}
    className="row"
  >
    <NavbarTopSearch />
    <NavbarTopNotif {...notif} />
    <NavbarTopProfile {...profile} />
  </Nav>
)

NavbarTop.propTypes = {
  notif: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default NavbarTop
