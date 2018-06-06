import React from "react"
import { Container, Row, Col } from "reactstrap"
import FoldersBarTop from "./FoldersBarTop"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import FoldersTable from "./FoldersTable"

const PageFolders = ({
  dataLinks,
  files = [],
  dirs = [],
  profile = { firstname: "", lastname: "", business: "" },
  notif = { notifsCount: 0 }
}) => (
  <Container fluid>
    <Row>
      <NavbarLeft dataLinks={dataLinks} />
      <Col md="10">
        <NavbarTop profile={profile} notif={notif} />
        <FoldersBarTop />
        <FoldersTable files={files} dirs={dirs} />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
