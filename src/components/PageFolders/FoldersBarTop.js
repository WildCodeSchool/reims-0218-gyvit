import React from "react"
import {
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Row,
  Container
} from "reactstrap"
import ModalCreateDirContainer from "../../containers/ModalCreateDirContainer"
import "./styles-page-folders/folderBarTop.css"

const FoldersBarTop = () => {
  return (
    <Container>
      <ModalCreateDirContainer />
      <Row>
        <Col xs="12">
          <Navbar
            expand="xs"
            style={{
              marginTop: "54px"
            }}
          >
            <NavbarBrand>Folders</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button className="ButtonFoldersBarTop">+</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}
export default FoldersBarTop
