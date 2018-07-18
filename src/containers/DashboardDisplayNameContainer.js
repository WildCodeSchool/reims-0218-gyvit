import { connect } from "react-redux"
import React, { Component } from "react"
import { Col } from "reactstrap"

//map the props profile to the user branch of the state
const mapStateToProps = state => {
  return {
    profile: state.user
  }
}

class DashboardDisplayNameContainer extends Component {
  render() {
    return (
      <Col md="12">
        <p
          style={{
            fontSize: "24px",
            height: "33px",
            marginTop: "5%",
            textAlign: "center"
          }}
        >
          Welcome to Gyvit, {this.props.profile.firstname}
        </p>

        <p
          style={{
            fontSize: "18px",
            height: "24px",
            textAlign: "center",
            color: "#000000",
            opacity: 0.45,
            marginBottom: "60px"
          }}
        >
          What would you like to do ?
        </p>
      </Col>
    )
  }
}

export default connect(mapStateToProps)(DashboardDisplayNameContainer)
