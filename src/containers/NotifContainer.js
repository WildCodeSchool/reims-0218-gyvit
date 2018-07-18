import React, { Component } from "react"
import NavbarTopNotifBubble from "../components/NavbarTop/NavbarTopNotifBubble"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  notif: state.notif.length
})

class NotifContainer extends Component {
  render() {
    return <NavbarTopNotifBubble notif={this.props.notif} />
  }
}

export default connect(
  mapStateToProps,
  null
)(NotifContainer)
