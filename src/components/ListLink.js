// TODO list of links to navbar

import React from "react"
import Link from "./Link"
import { Nav, NavItem, Navbar } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

const ListLink = ({ dataLinks }) => (
  <div>
    <Navbar
      light
      expand="md"
      style={{
        width: "220px",
        height: "1024px",
        backgroundColor: "#231b56",
        color: "white",
        marginTop: 10
      }}
    >
      <Nav vertical>
        <NavbarLeftLogo
          style={{
            color: "red",
            marginTop: 100,
            paddingRight: 100
          }}
        />

        <NavItem>
          {dataLinks.map((link, index) => <Link key={index} {...link} />)}
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default ListLink
