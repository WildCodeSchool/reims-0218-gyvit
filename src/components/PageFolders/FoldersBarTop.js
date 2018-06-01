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
  Row
} from "reactstrap"

const FoldersBarTop = () => {
  return (
    <Row>
      <Col xs="12">
        <Navbar
          expand="xs"
          style={{
            "margin-top": "54px"
          }}
        >
          <NavbarBrand style={{}}>Folders</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button
                  style={{
                    "border-radius": "50%",
                    "background-color": "#725fe3"
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
  )
}
export default FoldersBarTop
