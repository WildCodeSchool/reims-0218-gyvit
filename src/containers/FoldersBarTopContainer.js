import React from "react"
import { connect } from "react-redux"
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
import ModalCreateDirContainer from "./ModalCreateDirContainer"
import { makeShowModalCreateDir } from "../actions/modalCreateDirAction"
import DragNDropContainers from "../containers/DragNDropContainers"

const mapDispatchToProps = dispatch => ({
  onShowCreateDir: () => dispatch(makeShowModalCreateDir())
})

class FoldersBarTopContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
  }

  render() {
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
                      type="button"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        backgroundColor: "#725fe3"
                      }}
                      onClick={() => this.props.onShowCreateDir()}
                    >
                      +
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
        <DragNDropContainers />
      </Container>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FoldersBarTopContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
