//TODO: create component notif

import React from "react"
import { Row, Col } from "reactstrap"

import NotifContainer from "../../containers/NotifContainer"

const NavbarTopNotif = () => {
  return (
    <Row style={{ height: "90px" }}>
      <Col
        xs={{ size: 6 }}
        style={{
          backgroundColor: "none",
          margin: "auto",
          paddingRight: "0px"
        }}
        className=""
      >
        <img
          style={{
            backgroundColor: "none"
          }}
          src={process.env.PUBLIC_URL + "img/icon_notification.png"}
          alt="iconNotif"
        />
      </Col>
      <Col
        xs={{ size: 6 }}
        style={{
          backgroundColor: "none",
          marginTop: "19%",
          marginLeft: "-5%"
        }}
      >
        <NotifContainer />
      </Col>
    </Row>
  )
}



export default NavbarTopNotif
