//TODO: create component notif

import React from "react"
import { NavItem } from "reactstrap"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const NavbarTopNotif = ({ displayNumberNotifs }) => {
  return (
    <NavItem>
      <img src={process.env.PUBLIC_URL + "img/iconNotif.ico"} alt="iconNotif" />
      <NavbarTopNotifBubble numberNotifs={displayNumberNotifs} />
    </NavItem>
  )
}

export default NavbarTopNotif
