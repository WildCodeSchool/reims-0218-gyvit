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

import {
  makeHideModalCreateDir,
  makeValidateModalCreateDir
} from "../actions/modalCreateDirAction"

const mapStateToProps = state => {
  return {
    destination: state.parent._id,
    modalCreateDir: state.modalCreateDir.visibilityCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  // function for cancelling
  onModalCreateDirToHide: () => dispatch(makeHideModalCreateDir()),
  // function for validating the form
  onModalCreateDirToValidate: (name, parent_id) =>
    dispatch(makeValidateModalCreateDir(name, parent_id))
})

class ModalCreateDirContainer extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateDir}>
          <ModalHeader toggle={() => this.props.onModalCreateDirToHide()}>
            Add a directory
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Nom: </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter the name of the new Directory"
                />
                <Input
                  type="hidden"
                  name="destination"
                  id="destination"
                  value={this.props.destination}
                />
              </FormGroup>
              <Button
                type="button"
                onClick={() => this.props.onModalCreateDirToValidate()}
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
