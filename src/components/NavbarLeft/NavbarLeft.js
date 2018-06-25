// TODO list of links to navbar

import React from "react"
import PropTypes from "prop-types"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import links from "../../links"

const NavbarLeft = ({ dataLinks = links }) => (
  <div>
    <Row>
      <Nav
        vertical
        expand="md"
        style={{
          width: "220px",
          height: "100vw",
          backgroundColor: "#231b56",
          color: "white"
        }}
      >
        <NavbarLeftLogo />
        <NavItem
          activeClassName="is-active"
          style={{ marginLeft: "30px", marginTop: "80px", fontSize: "16px" }}
          className="align-center"
        >
          {dataLinks.map((link, index) => (
            <NavbarLeftItem key={index} {...link} />
          ))}
        </NavItem>
      </Nav>
    </Row>
  </div>
)

NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
