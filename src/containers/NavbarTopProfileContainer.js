import { connect } from "react-redux"
import React, { Component } from "react"
import { Media } from "reactstrap"
import PropTypes from "prop-types"

import NavbarTopProfile from "../components/NavbarTop/NavbarTopProfile"

//map the props profile to the user branch of the state
const mapStateToProps = state => {
  console.log("ça passe dans profile container")
  return {
    profile: state.user
  }
}

class NavbarTopProfileContainer extends Component {
  render() {
    return (
      <div>
        <div className="App" />
        <Media>
          <Media href="#">
            <Media
              style={{
                marginTop: "25px",
                width: "40px",
                height: "40px"
              }}
              className="rounded-circle"
              object
              src="img/kevinMarlot.jpeg"
              alt={this.props.profile.firstname}
            />
          </Media>
          <Media body>
            <Media
              style={{
                color: "#231b56",
                fontSize: "16px",
                marginTop: "28px",
                marginLeft: "21px"
              }}
              heading
            >
              <span>{this.props.profile.firstname}</span>{" "}
              <span>{this.props.profile.lastname}</span>
            </Media>

            <Media
              style={{
                color: "#372c78",
                marginTop: "5px",
                marginLeft: "21px",
                fontSize: "14px"
              }}
            >
              {this.props.profile.business}
            </Media>
          </Media>
        </Media>
      </div>
    )
  }
}

NavbarTopProfile.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired
}
export default connect(mapStateToProps)(NavbarTopProfileContainer)
