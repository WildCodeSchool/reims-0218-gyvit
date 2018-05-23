//TODO: create component Profile

import React from "react"
import { NavItem, Media } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const NavbarTopProfile = () => (
  <NavItem>
    <Media>
      <Media rounded-circle="true" href="#">
        <Media
          object
          src="http://via.placeholder.com/64x64"
          alt="Kevin Marlot"
        />
      </Media>
      <Media body>
        <Media heading>Kevin Marlot</Media>
        Meduza
      </Media>
    </Media>
  </NavItem>
)

export default NavbarTopProfile
