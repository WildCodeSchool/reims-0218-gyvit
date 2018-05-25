//TODO: create component notif bubble icon

import React from "react"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = ({ notifsCount }) => {
  return (
    <Badge color="danger" pill>
      {notifsCount}
    </Badge>
  )
}

export default NavbarTopNotifBubble
