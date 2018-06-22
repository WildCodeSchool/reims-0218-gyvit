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

import { makeCreateDirSuccess } from "../actions/foldersActions"
import { createDir } from "../api/CreateDir"

const mapStateToProps = state => {
  return {
    destination: state.parent._id,
    modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  // function for cancelling
  onCreateDir: name => {
    createDir(name, this.props.currentDirInfo._id).then(response =>
      dispatch(makeCreateDirSuccess(response))
    )
  }
})

class ModalCreateDirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }

    this.handleClick = this.handleChange.bind(this)
  }
  handleClick(event) {
    this.setState({ name: event.target.value })
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateDir}>
          <ModalHeader toggle={() => this.props.onModalCreateDirToHide()}>
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
                />
              </FormGroup>
              <Button
                type="button"
                onClick={() =>
                  this.props.onCreateDir(
                    document.forms["formCreateDir"].elements["name"]
                  )
                }
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
