import React from "react"

import { Container, Row, Col } from "reactstrap"

import NavbarTop from "./NavbarTop"

import FoldersBarTop from "./FoldersBarTop"

const PageFolders = () => (
  <Container>
    <Row>
      <Col xs="1" />
      <Col xs="11">
        <NavbarTop />
        <FoldersBarTop />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
