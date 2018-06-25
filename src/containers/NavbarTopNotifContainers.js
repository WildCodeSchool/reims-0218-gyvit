import React from "react"
import PropTypes from "prop-types"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"
import { connect } from "react-redux"


const mapStateToProps = state => ({
  notif: state.notif.length
})



console.log ("mon state :" (this.state))

//export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorContainer) 


