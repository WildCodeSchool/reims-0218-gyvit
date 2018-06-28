import React from "react"
import { Container, Row, Col } from "reactstrap"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import FoldersBarTopContainer from "../../containers/FoldersBarTopContainer"

const PageFolders = () => (
  <Container fluid>
    <Row>
      <Col
        xs="2"
        style={{
          paddingLeft: "0%",
          paddingRight: "0%"
        }}
      >
        <NavbarLeft />
      </Col>
      <Col
        xs="10"
        style={{
          paddingLeft: "0%",
          paddingRight: "0%"
        }}
      >
        <NavbarTop />
        <FoldersBarTopContainer />
      </Col>
    </Row>
  </Container>
)

export default PageFolders
