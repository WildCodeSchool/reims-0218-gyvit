//TODO: create component notif bubble icon

import React, { Component } from "react"
import { Badge } from "reactstrap"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    notif: state.notif
  }
}

class NavbarTopNotifBubbleContainer extends Component {
  render() {
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
        100
      </Badge>
    )
  }
}

export default connect(mapStateToProps)(NavbarTopNotifBubbleContainer)
