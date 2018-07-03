//TODO: create component notif

import React from "react"

import NotifContainer from "../../containers/NotifContainer"

const NavbarTopNotif = () => {
  return (
    <div>
      <img
        style={{
          marginTop: "40%"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.svg"}
        alt="iconNotif"
      />
      <NotifContainer />
    </div>
  )
}

export default NavbarTopNotif
