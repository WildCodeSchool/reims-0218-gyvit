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

//map the props profile to the user branch of the state
const mapStateToProps = state => {
  return {
    profile: state.user
  }
}

class NavbarTopProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          style={{
            height: "89px",
            padding: "auto",
            backgroundColor: "#ffffff",
            whiteSpace: "normal"
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
                    src="img/kevinMarlot.jpeg"
                    alt={this.props.profile.firstname}
                  />
                </Media>
              </Col>
              <Col lg="8" className="d-none d-xl-block d-md-none">
                <Media body>
                  <Media
                    style={{
                      color: "#231b56",
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

                      fontSize: "14px"
                    }}
                  >
                    {this.props.profile.business}
                  </Media>
                </Media>
              </Col>
            </Row>
          </Media>
        </DropdownToggle>
        <DropdownMenu
          style={{
            width: "80%",
            padding: "auto",
            fontSize: "14px"
          }}
        >
          <DropdownItem>Déconnexion</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default connect(mapStateToProps)(NavbarTopProfileContainer)
