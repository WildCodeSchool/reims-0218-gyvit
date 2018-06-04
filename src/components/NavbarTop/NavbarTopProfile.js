//TODO: create component Profile

import React from "react"
import { NavItem, Media } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const NavbarTopProfile = ({ firstname, lastname, business }) => (
  <NavItem>
    <Media>
      <Media href="#">
        <Media
          style={{
            marginTop: "25px"
          }}
          className="rounded-circle"
          object
          src="http://via.placeholder.com/40x40"
          alt={firstname}
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
          <span>{firstname}</span> <span>{lastname}</span>
        </Media>

        <Media
          style={{
            color: "#372c78",
            marginTop: "5px",
            marginLeft: "21px",
            fontSize: "14px"
          }}
        >
          {business}
        </Media>
      </Media>
    </Media>
  </NavItem>
)

export default NavbarTopProfile
