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
                  <Button
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#725fe3"
                    }}
                  >
                    +
                  </Button>
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
