//TODO: create component notif

import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"

import NotifContainer from "../../containers/NotifContainer"

const NavbarTopNotif = () => {
  return (
    <div>
      <img
        style={{
          marginTop: "35%",
          marginBotton: "40%"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.svg"}
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
