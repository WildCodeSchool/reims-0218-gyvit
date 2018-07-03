//TODO: create component notif bubble icon

import React from "react"
import { Badge } from "reactstrap"

const NavbarTopNotifBubble = () => {
  return (
    <Badge
      style={{
        backgroundColor: "#ff007e",
        width: "1.7em",
        height: "1.7em",
        marginTop: "23%",
        marginBotton: "71%"
      }}
      className="center"
      pill
    >
      <p style={{ wigth: "0.5%", height: "0.7%" }}>6</p>
    </Badge>
  )
}

export default NavbarTopNotifBubble
