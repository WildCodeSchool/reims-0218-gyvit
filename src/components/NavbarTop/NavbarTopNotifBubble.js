//TODO: create component notif bubble icon

import React from "react"
import PropTypes from "prop-types"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = ({ notifsCount }) => {
  return (
    <Badge
      style={{
        marginTop: "-50px",
        backgroundColor: "#ff007e",
        width: "auto",
        height: "20px"
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
