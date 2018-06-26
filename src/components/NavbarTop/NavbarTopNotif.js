//TODO: create component notif

import React from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"
import NotifContainer from "../../containers/NotifContainer"

const NavbarTopNotif = () => {
  return (
    <Row style={{ height: "90px" }}>
      <Col
        md={{ size: 1, offset: 5 }}
        style={{
          backgroundColor: "green",
          margin: "auto",
          paddingRight: "0px"
        }}
      >
        <img
          style={{
            backgroundColor: "green"
          }}
          src={process.env.PUBLIC_URL + "img/icon_notification.png"}
          alt="iconNotif"
        />
      </Col>
      <Col
        md={{ size: 6, offset: 0 }}
        style={{
          backgroundColor: "yellow",
          marginTop: "19%",
          paddingLeft: "0px"
        }}
      >
        <NotifContainer />
      </Col>
    </Row>
  )
}

NavbarTopNotif.propTypes = {
  notifsCount: PropTypes.number.isRequired
}

export default NavbarTopNotif
