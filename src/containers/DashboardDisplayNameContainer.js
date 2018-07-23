import { connect } from "react-redux"
import React, { Component } from "react"
import { Col } from "reactstrap"
import { connectUserSuccessAction } from "../actions/userAction"
import { retrieveMe } from "../api/users/retrieveMe"

//map the props profile to the user branch of the state
const mapStateToProps = state => {
  return {
    profile: state.user
  }
}
const mapDispatchToProps = dispatch => ({
  onRetrieveMe: response => dispatch(connectUserSuccessAction(response))
})

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
          Bienvenue sur Gyvit, {this.props.profile.firstname}
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
          Que voulez-vous faire?
        </p>
      </Col>
    )
  }
  componentDidMount() {
    retrieveMe().then(response => this.props.onRetrieveMe(response))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDisplayNameContainer)
