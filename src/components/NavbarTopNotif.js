//TODO: create component notif

import React from "react"
import { NavItem } from "reactstrap"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const NavbarTopNotif = ({ notifsCount }) => {
  return (
    <NavItem>
      <img src={process.env.PUBLIC_URL + "img/iconNotif.ico"} alt="iconNotif" />
      <NavbarTopNotifBubble notifsCount={notifsCount} />
    </NavItem>
  )
}

export default NavbarTopNotif
