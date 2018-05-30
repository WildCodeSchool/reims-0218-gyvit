//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Nav } from "reactstrap"

import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopSearch from "./NavbarTopSearch"
import NavbarTopProfile from "./NavbarTopProfile"

const propsContentOfProfil = {
  lastname: "Duflot",
  firstname: "Romain",
  business: "Notoriety"
}
const NavbarTop = (propsWith116notif, firstname, lastname, business) => (
  <Nav
    style={{
      height: "90px",
      "background-color": "#ffffff",
      border: "solid 1px #e5e8f4"
    }}
    className="row"
  >
    <NavbarTopSearch />
    <NavbarTopNotif {...propsWith116notif} />
    <NavbarTopProfile {...propsContentOfProfil} />
  </Nav>
)

export default NavbarTop
