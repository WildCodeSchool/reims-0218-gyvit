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
import { updateDir } from "../api/directorys/updateDir"

const mapStateToProps = state => {
  return {
    name: state.modalUpdateDir.name,
    id: state.modalUpdateDir.dir,
    destination: state.currentDir._id,
    modalUpdateDir: state.modalUpdateDir.visibilityUpdateDir
  }
}

const mapDispatchToProps = dispatch => ({
  onHideModal: () => dispatch(makeHideModalUpdateDir()),
  onUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response))
})

class ModalUpdateDirContainer extends Component {
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
        <Modal isOpen={this.props.modalUpdateDir}>
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
                  updateDir(this.state.name, this.props.id).then(res =>
                    this.props.onUpdateDir(res)
                  )
                  console.log("inside modal", this.state.name, this.props.id)
                  this.props.onHideModal()
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
  ModalUpdateDirContainer
)
