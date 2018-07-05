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
  onSubmitUpdateFile: (name, file) => {
    updateFile(name, file)
  },
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
                onClick={response => {
                  this.props.onSubmitUpdateFile(this.state.name, this.props.id)
                  console.log("inside modal", this.state.name, this.props.id)
                  this.props.onHideModal()
                  this.props.onUpdateFile(response)
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
