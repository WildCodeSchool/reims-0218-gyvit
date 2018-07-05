import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Button, Form, FormGroup, Label } from "reactstrap"

import ModalErrorContainer from "./ModalErrorContainer"
import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"
import { makeHideModalCreateFile } from "../actions/modalCreateFileAction"
import { makeShowModalError } from "../actions/errorsActions"

const mapStateToProps = state => ({
  destination: state.currentDir._id
})

const mapDispatchToProps = dispatch => ({
  onFileUpload: response => dispatch(makeAddAFileSuccess(response)),
  onHideModal: () => dispatch(makeHideModalCreateFile()),
  onError: message => dispatch(makeShowModalError(message))
})

class UploadFileFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { visibilityError: false }

    this.onHandleFileUpload = this.onHandleFileUpload.bind(this)
  }

  onHandleFileUpload() {
    const data = new FormData()
    data.append("file", this.fileInput.files[0])
    data.append("destination", this.props.destination)
    data.append("name", this.fileInput.files[0].name)
    //build data
    uploadFile(data)
      .then(response => this.props.onFileUpload(response))
      .catch(response => this.props.onError(response.message))
    this.props.onHideModal()
  }

  render() {
    return (
      <Form>
        <ModalErrorContainer />
        <FormGroup row>
          <Label for="inputFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <input
              type="file"
              name="file"
              id="inputFile"
              ref={input => {
                this.fileInput = input
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="button" onClick={this.onHandleFileUpload}>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  UploadFileFormContainer
)
