//TODO: create component notif bubble icon

import React from "react"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = ({ notifsCount }) => {
  return (
    <Badge
      style={{
        "background-color": "#ff007e",
        width: "20px",
        height: "20px"
      }}
      pill
    >
      {notifsCount}
    </Badge>
  )
}

export default NavbarTopNotifBubble
