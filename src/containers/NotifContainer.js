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

//console.log ("mon state :" (this.state))

export default connect(mapStateToProps, null)(NotifContainer)
