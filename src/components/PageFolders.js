import React from "react"

import { Container, Row, Col } from "reactstrap"

import NavbarTop from "./NavbarTop"
import ContentFile from "./ContentFile"
import FoldersBarTop from "./FoldersBarTop"

const PageFolders = ({ notif, profile, files, dirs }) => (
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
