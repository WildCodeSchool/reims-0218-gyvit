//TODO: create component Profile

import React from "react"
import { NavItem, Media } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const NavbarTopProfile = ({ firstname, lastname, business }) => (
  <NavItem className="col-3">
    <Media>
      <Media rounded-circle="true" href="#">
        <Media object src="http://via.placeholder.com/64x64" alt={firstname} />
      </Media>
      <Media body>
        <Media heading>
          <span>{firstname}</span>
          &nbsp;
          <span>{lastname}</span>
        </Media>
        {business}
      </Media>
    </Media>
  </NavItem>
)

export default NavbarTopProfile
