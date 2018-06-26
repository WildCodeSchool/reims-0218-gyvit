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

import { makeHideModalCreateDir } from "../actions/modalCreateDirAction"
import { makeCreateDirSuccess } from "../actions/foldersActions"
import { createDir } from "../api/directorys/createDir"

const mapStateToProps = state => {
  return {
    destination: state.currentDir._id,
    modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  // function to store the new dir
  onSubmitCreateDir: response => dispatch(makeCreateDirSuccess(response)),
  // function for cancelling modal
  onHideModal: () => dispatch(makeHideModalCreateDir())
})

class ModalCreateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    this.handleChange = this.handleChange.bind(this)
    this.onCreateDir = this.onCreateDir.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  onCreateDir(name) {
    console.log(this.state)
    createDir(name, this.props.destination).then(response =>
      this.props.onSubmitCreateDir(response)
    )
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateDir}>
          <ModalHeader toggle={() => this.props.onHideModal() /*cancel modal*/}>
            Add a directory
          </ModalHeader>
          <ModalBody>
            <Form name="formCreateDir">
              <FormGroup>
                <Label for="name">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter the name of the new Directory"
                  onChange={event => this.handleChange(event)} // controlled seizure of input for new name
                />
              </FormGroup>
              <Button
                type="button"
                onClick={() => this.onCreateDir(this.state.name)}
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
  ModalCreateDirContainer
) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
