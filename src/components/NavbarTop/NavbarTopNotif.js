//TODO: create component notif

import React from "react"

import NotifContainer from "../../containers/NotifContainer"
import "./styles-navbar-top/navbarTop.css"

const NavbarTopNotif = () => {
  return (
    <div>
      <img
        className="notif"
        src={process.env.PUBLIC_URL + "img/icon_notification.svg"}
        alt="notif-icon"
      />
      <NotifContainer />
    </div>
  )
}

export default NavbarTopNotif
