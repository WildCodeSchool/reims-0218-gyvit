import { connect } from "react-redux"
import React, { Component } from "react"
import {
  Media,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import { removeToken } from "../../src/api/users/localStorageToken"
import { disconnectUserSuccessAction } from "../actions/userAction"

//map the props profile to the user branch of the state
const mapStateToProps = state => {
  return {
    profile: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  onDisconnectedUser: response =>
    dispatch(disconnectUserSuccessAction(response))
})

class NavbarTopProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      business: "Meduza"
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Dropdown
        color="none"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle
          color="none"
          style={{
            width: "98%",
            height: "86px",
            padding: "auto",
            backgroundColor: "#ffffff",
            borderColor: "none",
            border: "0px"
          }}
        >
          <Media>
            <Row>
              <Col lg="4">
                <Media href="#">
                  <Media
                    style={{
                      width: "6vh"
                    }}
                    className="rounded-circle"
                    object
                    src="img/romainDuflot.jpg"
                    alt={this.props.profile.firstname}
                  />
                </Media>
              </Col>
              <Col lg="8" className="d-none d-xl-block d-md-none">
                <Media body>
                  <Media
                    style={{
                      color: "#372c78",
                      fontSize: "16px",
                      marginTop: "auto"
                    }}
                    heading
                  >
                    <span>{this.props.profile.firstname}</span>{" "}
                    <span>{this.props.profile.lastname}</span>
                  </Media>

                  <Media
                    style={{
                      color: "#372c78",
                      fontSize: "14px",
                      opacity: 0.45,
                      paddingLeft: "30px"
                    }}
                  >
                    {this.state.business}{" "}
                    {/*this.props.profile.business we have put this.state.business because we don't have this information inside a User (API)*/}
                  </Media>
                </Media>
              </Col>
            </Row>
          </Media>
        </DropdownToggle>
        <DropdownMenu
          style={{
            paddingLeft: "-2%",
            marginLeft: "-1%",
            width: "100%",
            padding: "auto",
            textAlign: "center",
            fontSize: "14px"
          }}
        >
          <DropdownItem>
            <a
              href="/"
              color="primary"
              size="xs"
              padding="auto"
              onClick={() =>
                removeToken().then(() => this.props.onDisconnectedUser())
              }
            >
              Déconnexion
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NavbarTopProfileContainer
)
