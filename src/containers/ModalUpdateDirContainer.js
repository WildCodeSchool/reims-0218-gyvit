import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"

import { makeHideModalUpdateDir } from "../actions/modalUpdateDirAction"
import { makeUpdateAFolderSuccess } from "../actions/foldersActions"
import { makeShowModalError } from "../actions/errorsActions"
import { updateDir } from "../api/directorys/updateDir"
import ModalErrorContainer from "./ModalErrorContainer"

const mapStateToProps = state => {
  return {
    name: state.modalUpdateDir.name,
    id: state.modalUpdateDir.dir,
    destination: state.currentDir._id,
    modalUpdateDir: state.modalUpdateDir.visibilityUpdateDir
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmitUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response)),
  onHideModal: () => dispatch(makeHideModalUpdateDir()),
  onError: message => dispatch(makeShowModalError(message))
})

class ModalUpdateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", visibilityError: false }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  // controlled seizure
  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onUpdateDir() {
    updateDir(this.state.name, this.props.id)
      .then(response => this.props.onSubmitUpdateDir(response))
      .then(() => this.props.onHideModal()) // close modal after creating a dir
      .catch(response => this.props.onError(response.message))
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalUpdateDir}>
          <ModalErrorContainer />
          <ModalHeader toggle={() => this.props.onHideModal()}>
            Rename the directory {this.props.name}
          </ModalHeader>
          <ModalBody>
            <Form
              name="formUpdateDir"
              onSubmit={event => event.preventDefault()}
            >
              <FormGroup>
                <Label for="name">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  placeholder="Change the name of the Directory"
                  onChange={event => this.handleNameChange(event)}
                />
              </FormGroup>
              <Button type="button" onClick={() => this.onUpdateDir()}>
                Submit
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalUpdateDirContainer
)
