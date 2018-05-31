//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Nav } from "reactstrap"

import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const NavbarTop = ({ notif, profile }) => (
  <Nav
    style={{
      height: "90px",
      "background-color": "#ffffff",
      border: "solid 1px #e5e8f4"
    }}
    className="row"
  >
    <NavbarTopSearch />
    <NavbarTopNotif {...notif} />
    <NavbarTopProfile {...profile} />
  </Nav>
)

export default NavbarTop
