// TODO list of links to navbar

import React from "react"
import PropTypes from "prop-types"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem, Row, Container } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import { link, settings } from "../../links"

const NavbarLeft = ({ dataLinks = link }) => (
  <Container>
    <Row>
      <Nav
        vertical
        expand="md"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#231b56",
          color: "white"
        }}
      >
        <NavbarLeftLogo />
        <NavItem
          activeClassName="is-active"
          style={{
            marginRight: "0px",
            marginLeft: "0%",
            marginTop: "80%",
            fontSize: "16px",
            textAlign: "center"
          }}
          className="align-center"
        >
          {dataLinks.map((link, index) => (
            <NavbarLeftItem key={index} {...link} />
          ))}
        </NavItem>

        <NavItem
          activeClassName="is-active"
          style={{
            marginRight: "0px",
            marginLeft: "0%",
            fontSize: "16px",
            textAlign: "center",
            marginTop: "auto"
          }}
          className="align-center"
        >
          <NavbarLeftItem {...settings} />
        </NavItem>
      </Nav>
    </Row>
  </Container>
)

NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
