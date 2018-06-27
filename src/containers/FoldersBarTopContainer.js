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
import PathElement from "../components/PageFolders/PathElement"
import { makeShowModalCreateDir } from "../actions/modalCreateDirAction"

const mapDispatchToProps = dispatch => ({
  onShowCreateDir: () => dispatch(makeShowModalCreateDir())
})

const mapStateToProps = state => ({
  currentDir: state.currentDir
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
              <NavbarBrand>
                Folders/
                {// condition to display a path, only if a path exist
                this.props.currentDir.path !== undefined
                  ? this.props.currentDir.path.map(pathElement => {
                      return <PathElement name={pathElement.name} />
                    })
                  : ""}
                <a>{this.props.currentDir.name}</a>
              </NavbarBrand>
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
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FoldersBarTopContainer
)
