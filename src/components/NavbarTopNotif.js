//TODO: create component search bar

import React from "react"
import { NavItem } from "reactstrap"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const NavbarTopNotif = () => (
  <NavItem>
    <img src={process.env.PUBLIC_URL + "img/iconNotif.ico"} alt="iconNotif" />
    <NavbarTopNotifBubble />
  </NavItem>
)

export default NavbarTopNotif
