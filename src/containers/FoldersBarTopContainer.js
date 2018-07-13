import React from "react"
import { connect } from "react-redux"
import {
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button,
  Row,
  Container
} from "reactstrap"
import ModalCreateDirContainer from "./ModalCreateDirContainer"
import ModalCreateFileContainer from "./ModalCreateFileContainer"
import ModalErrorContainer from "./ModalErrorContainer"
import PathElement from "../components/PageFolders/PathElement"
import { makeShowModalCreateDir } from "../actions/modalCreateDirAction"
import { makeShowModalCreateFile } from "../actions/modalCreateFileAction"
import { makeShowModalError } from "../actions/errorsActions"
import DragNDropContainer from "../containers/DragNDropContainer"

import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapDispatchToProps = dispatch => ({
  onShowCreateDir: () => dispatch(makeShowModalCreateDir()),
  onShowCreateFile: () => dispatch(makeShowModalCreateFile()),
  onSelectPathElement: id =>
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onError: message => dispatch(makeShowModalError(message))
})

const mapStateToProps = state => ({
  currentDir: state.currentDir
})

class FoldersBarTopContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", visibilityError: false }
  }

  render() {
    return (
      <Container id="containerBarTop" fluid>
        <ModalErrorContainer />
        <ModalCreateDirContainer />
        <ModalCreateFileContainer />
        <Row>
          <Col xs="12">
            <Navbar
              expand="xs"
              style={{
                marginTop: "54px"
              }}
            >
              <NavbarBrand>
                Folders
                {this.props.currentDir.path &&
                  this.props.currentDir.path.map(pathElement => (
                    <PathElement
                      isCurrent={true}
                      name={pathElement.name}
                      onClick={() =>
                        this.props
                          .onSelectPathElement(pathElement._id)
                          .catch(response =>
                            this.props.onError(response.message)
                          )
                      }
                    />
                  ))}
                {this.props.currentDir.name && (
                  <PathElement
                    isCurrent={false}
                    name={this.props.currentDir.name}
                  />
                )}
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
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
                  <img
                    src={process.env.PUBLIC_URL.concat("../Icons/file.svg")}
                    style={{
                      height: "50px",

                      width: "50px"
                    }}
                    alt="add directory"
                    onClick={() => this.props.onShowCreateFile()}
                  />
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
        <DragNDropContainer />
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FoldersBarTopContainer
)
