//TODO: create component notif

import React from "react"
import PropTypes from "prop-types"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const NavbarTopNotif = () => {
  return (
    <div>
      <img
        style={{
          marginTop: "37px"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.png"}
        alt="iconNotif"
      />
      <NavbarTopNotifBubble notifsCount={66} />
    </div>
  )
}

NavbarTopNotif.propTypes = {
  notifsCount: PropTypes.number.isRequired
}

export default NavbarTopNotif
