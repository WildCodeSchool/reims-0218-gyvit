import { connect } from "react-redux"
import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"

import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTop/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTop/NavbarTopProfile"

//map the props profile to the user branch of the state
const mapStateToProps = state => ({
  profile: state.user
})

class NavbarTopContainer extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    return (
      <Row
        style={{
          height: "90px",
          backgroundColor: "#ffffff",
          border: "solid 1px #E5E8F4"
        }}
      >
        <Col xs="7">
          <NavbarTopSearch />
        </Col>
        <Col xs="2">
          <NavbarTopNotif {...this.props.notif} />
        </Col>
        <Col xs="3">
          <NavbarTopProfile profile={this.props.profile} />
        </Col>
      </Row>
    )
  }
}
NavbarTopContainer.propTypes = {
  notif: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(NavbarTopContainer)
