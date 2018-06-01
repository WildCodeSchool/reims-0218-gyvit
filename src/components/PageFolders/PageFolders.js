import React from "react"
import { Container, Row, Col } from "reactstrap"
import FoldersBarTop from "./FoldersBarTop"
import FoldersTable from "./FoldersTable"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import NavbarLeftItem from "../NavbarLeft/NavbarLeftItem"
import FoldersTableCategory from "./FoldersTableCategory"

const PageFolders = ({ dataLinks, files = [], dirs = [] }) => (
  <Container fluid>
    <Row>
      <Col xs="2">
        <NavbarLeft dataLinks={dataLinks} />
      </Col>
      <Col xs="10">
        <NavbarTop />
        <FoldersBarTop />
        <FoldersTable />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
