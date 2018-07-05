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
          style={{
            marginRight: "0px",
            marginLeft: "25%",
            marginTop: "30%",
            fontSize: "16px",
            textAlign: "left"
          }}
          className="align-center"
        >
          {dataLinks.map((link, index) => (
            <NavbarLeftItem key={index} {...link} />
          ))}
        </NavItem>

        <NavItem
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
