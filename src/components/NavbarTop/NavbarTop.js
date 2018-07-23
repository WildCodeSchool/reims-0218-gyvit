import React from "react"
import { Row, Col, Container } from "reactstrap"

import NavbarTopProfileContainer from "../../containers/NavbarTopProfileContainer"
import SearchContainer from "../../containers/SearchContainer"
import NavbarTopNotif from "./NavbarTopNotif"

const NavbarTop = () => (
  <Container fluid>
    <Row
      style={{
        height: "90px",
        backgroundColor: "#ffffff",
        border: "solid 2px #E5E8F4"
      }}
    >
      <Col xs="8">
        <SearchContainer />
      </Col>
      <Col xs="1">
        <NavbarTopNotif />
      </Col>
      <Col xs="3">
        <NavbarTopProfileContainer />
      </Col>
    </Row>
  </Container>
)

export default NavbarTop
