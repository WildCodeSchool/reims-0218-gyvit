// TODO list of links to navbar

import React from "react"
import Link from "./Link"
import { Nav, NavItem, Navbar } from "reactstrap"

const ListLink = ({ dataLinks }) => (
  <Navbar
    light
    expand="md"
    style={{
      width: "220px",
      height: "1024px",
      backgroundColor: "#231b56"
    }}
  >
    <Nav vertical>
      <NavItem>
        {dataLinks.map((link, index) => <Link key={index} {...link} />)}
      </NavItem>
    </Nav>
  </Navbar>
)

export default ListLink
