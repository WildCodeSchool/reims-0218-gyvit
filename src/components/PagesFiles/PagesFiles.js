import React from "react"
import { Row, Col, Container, Form } from "reactstrap"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import NavbarTop from "../NavbarTop/NavbarTop"
import FoldersBarTop from "../PageFolders/FoldersBarTop";
import FoldersTable from "../PageFolders/FoldersTable";


const PagesFiles = ({ dataLinks,notif,profile, files = [], dirs = [] }) => (
  <Container fluid>
    
      <Row>
        <Col md="2">
          <NavbarLeft dataLinks= {dataLinks} />
        </Col>
        <Col md="10">
          <NavbarTop notif={notif} profile={profile}/>
          <FoldersBarTop />
          <FoldersTable />
        </Col>
      </Row>
    
  </Container>
)

export default PagesFiles
