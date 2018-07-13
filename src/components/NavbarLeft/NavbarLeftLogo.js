import React from "react"
import { Col } from "reactstrap"
import { NavLink } from "react-router-dom"
import "./styles-navbar-left/navbarLeftLogo.css"

const NavbarLeftLogo = () => {
  return (
    <div className=" logo-gyvit d-flex align-items-center">
      <Col>
        <NavLink className="logo-link-home" to="/home">
          GYVIT
        </NavLink>
      </Col>
    </div>
  )
}

export default NavbarLeftLogo
