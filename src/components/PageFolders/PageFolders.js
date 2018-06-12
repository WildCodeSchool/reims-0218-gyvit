import React from "react"
import { Container, Row, Col } from "reactstrap"
import FoldersBarTop from "./FoldersBarTop"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import FoldersTable from "./FoldersTable"
import { listContentOfDirectory } from "../../api/directorys/listContentOfDirectory"

const PageFolders = ({
  dataLinks,
  profile = { firstname: "", lastname: "", business: "" },
  notif = { notifsCount: 0 }
}) =>
  listContentOfDirectory("SammTrading").then(directory => {
    return (
      <Container fluid>
        <Row>
          <NavbarLeft dataLinks={dataLinks} />
          <Col md="10">
            <NavbarTop profile={profile} notif={notif} />
            <FoldersBarTop />
            <FoldersTable files={directory.files} dirs={directory.dirs} />
          </Col>
        </Row>
      </Container>
    )
  })

export default PageFolders
