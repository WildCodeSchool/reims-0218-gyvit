//TODO: create navbar top with search bar, notification icon and profile.

import React from "react"
import { Row, Col, Container } from "reactstrap"

import NavbarTopProfileContainer from "../../containers/NavbarTopProfileContainer"
import SearchContainer from "../../containers/SearchContainer"
import NavbarTopNotif from "./NavbarTopNotif"
import "./styles-navbar-top/navbarTop.css"

const NavbarTop = () => (
  <Container fluid>
    <Row className="navbar-top">
      <Col xs="9">
        <SearchContainer />
      </Col>
      <Col xs="1">
        <NavbarTopNotif />
      </Col>
      <Col xs="2">
        <NavbarTopProfileContainer />
      </Col>
    </Row>
  </Container>
)

export default NavbarTop
