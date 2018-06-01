import React from "react"
import { Container, Row, Col } from "reactstrap"
import FoldersBarTop from "./FoldersBarTop"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"

const PageFolders = ({ dataLinks, files = [], dirs = [] }) => (
  <Container fluid>
    <Row>
      <NavbarLeft dataLinks={dataLinks} />
      <Col md="10">
        <NavbarTop />
        <FoldersBarTop />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
