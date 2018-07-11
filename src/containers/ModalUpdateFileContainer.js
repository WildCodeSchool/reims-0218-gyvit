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

import { makeHideModalUpdateFile } from "../actions/modalUpdateFileAction"
import { makeUpdateAFileSuccess } from "../actions/filesActions"
import { updateFile } from "../api/files/updateFile"

const mapStateToProps = state => {
  return {
    name: state.modalUpdateFile.name,
    id: state.modalUpdateFile.file,
    destination: state.currentFile._id,
    modalUpdateFile: state.modalUpdateFile.visibilityUpdateFile
  }
}

const mapDispatchToProps = dispatch => ({
  onHideModal: () => dispatch(makeHideModalUpdateFile()),
  onUpdateFile: response => dispatch(makeUpdateAFileSuccess(response))
})

class ModalUpdateFileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  // controlled seizure
  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onSubmitUpdateFile() {
    updateFile(this.state.name, this.props.id)
      .then(response => this.props.onUpdateFile(response))
      .then(this.props.onHideModal)
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalUpdateFile}>
          <ModalHeader toggle={() => this.props.onHideModal()}>
            Rename the directory {this.props.name}
          </ModalHeader>
          <ModalBody>
            <Form name="formUpdateDir">
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
              <Button
                type="button"
                onClick={() => {
                  this.onSubmitUpdateFile()
                }}
              >
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
  ModalUpdateFileContainer
)
