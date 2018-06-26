//TODO: create component notif bubble icon

import React from "react"
import PropTypes from "prop-types"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = () => {
  return (
    <Badge
      style={{
        backgroundColor: "#ff007e",
        width: "auto",
        height: "4%"
      }}
      pill
    >
      8
    </Badge>
  )
}

NavbarTopNotifBubble.propTypes = {
  notifsCount: PropTypes.number.isRequired
}

export default NavbarTopNotifBubble
