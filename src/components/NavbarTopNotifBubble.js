//TODO: create component notif bubble icon

import React from "react"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = ({ numberNotifs }) => {
  return (
    <Badge color="danger" pill>
      {numberNotifs}
    </Badge>
  )
}

export default NavbarTopNotifBubble
