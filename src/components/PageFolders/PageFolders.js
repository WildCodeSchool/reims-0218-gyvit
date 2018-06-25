import React from "react"
import { Container, Row, Col } from "reactstrap"
import FoldersBarTop from "./FoldersBarTop"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"

import FoldersTableContainer from "../../containers/FoldersTableContainer"

const PageFolders = () => (
  <Container fluid>
    <Row>
      <NavbarLeft />
      <Col md="10">
        <NavbarTop />
        <FoldersBarTop />
        <FoldersTableContainer />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
