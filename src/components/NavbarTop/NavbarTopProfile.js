//TODO: create component Profile

import React from "react"
import { Media } from "reactstrap"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles-navbar-top/navbarProfile.css"

const NavbarTopProfile = ({ firstname, lastname, business }) => (
  <div>
    <Media>
      <Media href="#">
        <Media
          object
          className="pic-profile rounded-circle"
          src="img/kevinMarlot.jpeg"
          alt={firstname}
        />
      </Media>
      <Media body>
        <Media className="id-profile" heading>
          <span>{firstname}</span> <span>{lastname}</span>
        </Media>

        <Media className="business-profile">{business}</Media>
      </Media>
    </Media>
  </div>
)

NavbarTopProfile.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired
}

export default NavbarTopProfile
