//TODO: create component notif bubble icon

import React from "react"
import PropTypes from "prop-types"
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

NavbarTopNotifBubble.propTypes = {
  notifscount: PropTypes.number.isRequired
}

export default NavbarTopNotifBubble
