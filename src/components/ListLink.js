// TODO list of links to navbar

import React from "react"
import Link from "./Link"
import { Nav, NavItem, Navbar, Row, Col } from "reactstrap"

const ListLink = ({ dataLinks }) => (
  <Row>
    <Col xs={3}>
      <Navbar color="dark" light expand="md">
        <Nav vertical>
          <NavItem>
            {/* {dataLinks.map((link, index) => <Link key={index} {...link} />)} */}
          </NavItem>
        </Nav>
      </Navbar>
    </Col>
  </Row>
)

export default ListLink
