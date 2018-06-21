//TODO: create component notif

import React from "react"
import { connect } from "react-redux"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const mapStateToProps = state => {
  return {
    notifsCount: state.notifsCount
  }
}

const NavbarTopNotifContainer = () => {
  return (
    <div>
      <img
        style={{
          marginTop: "37px"
        }}
        src={process.env.PUBLIC_URL + "img/icon_notification.png"}
        alt="iconNotif"
      />
      <NavbarTopNotifBubble notifsCount={this.props.notifsCount} />
    </div>
  )
}

export default connect(mapStateToProps, null)(NavbarTopNotifContainer)
