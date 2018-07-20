// TODO create navbar

import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"
import { NavLink } from "react-router-dom"
import "./styles-navbar-left/navbarLeftItem.css"

const style = {
  color: "#00BFFF",
 // textDecoration: "none"
}

const NavbarLeftItem = ({ icon, nameLink, link }) => (
  <div>
    <Row>
      <Col xs="12">
        <NavLink to={link} activeStyle={style} 
        style = {{
            textDecoration : "none",
            border :"none"
        }} className="navbar-left-item">
          <img alt="" src={icon} className="navbar-left-icon" style ={{
            paddingBottom :"5px",
            marginLeft :"0px",
            border:"none",
            paddingRight :"5px"
          }} />
          {nameLink}
        </NavLink>
      </Col>
    </Row>
    <hr  style = {{
            textDecoration : "none",
            border :"none",
            paddingBottom:"4px"
        }}/>
  </div>
)

NavbarLeftItem.propTypes = {
  icon: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired
}

export default NavbarLeftItem
