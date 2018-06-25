import React from "react"
import { Container, Row, Col } from "reactstrap"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"

import FoldersTableContainer from "../../containers/FoldersTableContainer"
import FoldersBarTopContainer from "../../containers/FoldersBarTopContainer"

const PageFolders = () => (
  <Container fluid>
    <Row>
      <NavbarLeft />
      <Col md="10">
        <NavbarTop />
        <FoldersBarTopContainer />
        <FoldersTableContainer />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
