import React from "react"

import { Container, Row, Col } from "reactstrap"

import NavbarTop from "./NavbarTop"

const PageFolders = ({ notif, profile }) => (
  <Container>
    <Row>
      <Col xs="1" />
      <Col xs="11">
        <NavbarTop {...notif} {...profile} />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
