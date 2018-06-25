import React, { Component } from "react"
import NavbarTopNotif from "./NavbarTopNotif"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"
import { connect } from "react-redux"
import notifsCount from "NavbarTopNotif"


const mapStateToProps = state => ({
  notif: state.notif.length
})

class NavbarTopNotifContainers extends Component{
  render (){
    return(
        <NavbarTopNotifBubble   />
        {this.state.length}
)
  }
}


//console.log ("mon state :" (this.state))

export default connect(mapStateToProps, null )(NavbarTopNotifContainers) 


