//TODO: create component notif bubble icon

import React from "react"
import PropTypes from "prop-types"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = ({ notifsCount }) => {
  return (
    <Badge
      style={{
        backgroundColor: "#ff007e",
        width: "25px",
        height: "25px"
      }}
      pill
    >
      {notifsCount}
    </Badge>
  )
}

NavbarTopNotifBubble.propTypes = {
  notifsCount: PropTypes.number.isRequired
}

export default NavbarTopNotifBubble
