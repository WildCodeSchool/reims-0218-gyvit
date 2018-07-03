//TODO: create component notif

import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import NotifContainer from "../../containers/NotifContainer"

const NavbarTopNotif = () => {
  return (
    <div>
      <img
        style={{
          width: " 16px",
          height: "16px",
          marginTop: "37px",
          marginBotton: "37px"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.png"}
        alt="iconNotif"
      />
      <NotifContainer />
    </div>
  )
}

NavbarTopNotif.propTypes = {
  notifsCount: PropTypes.number.isRequired
}

export default NavbarTopNotif
