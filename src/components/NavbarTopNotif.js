//TODO: create component notif

import React from "react"
import { NavItem } from "reactstrap"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const NavbarTopNotif = ({ notifsCount }) => {
  //console.log(notifsCount)
  return (
    <NavItem className="col-1">
      <img
        style={{
          marginTop: "37px"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.png"}
        alt="iconNotif"
      />
      <NavbarTopNotifBubble notifsCount={notifsCount} />
    </NavItem>
  )
}

export default NavbarTopNotif
