import React, { Component } from "react"
import NavbarTopNotifBubble from "../components/NavbarTop/NavbarTopNotifBubble"
import { connect } from "react-redux"


const mapStateToProps = state => ({
  notif: state.notif.length
})

class NotifContainer extends Component{
  render (){
    return(
      <div>
        <NavbarTopNotifBubble 
        notif = {this.props.notif}  />
      </div>    
    )
  }
}

//console.log ("mon state :" (this.state))

export default connect(mapStateToProps, null )(NotifContainer) 

