import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Button, Form, FormGroup, Label } from "reactstrap"

import { DateTime } from "luxon"
import ModalErrorContainer from "./ModalErrorContainer"
// import { uploadFile } from "../api/files/uploadFile"
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
    const CurrentTime = DateTime.fromMillis(Date.now())
      .setLocale("en-US")
      .toLocaleString()
    this.state = {
      visibilityError: false,

      file: {
        _id: "file_odd9OMeNdsds2lE3ePeN02N9",
        object: "file",
        name: "Sksdfdsfetch",
        size: "1000",
        ext: "php",
        type: "",
        remove: 0,
        created: "2018-03-29T00:00:00+00:00",
        modified: `${CurrentTime}`,
        removed: null
      }
    }

    // this.onHandleFileUpload = this.onHandleFileUpload.bind(this)
  }

  // onHandleFileUpload() {
  //   const data = new FormData()
  //   data.append("file", this.fileInput.files[0])
  //   data.append("destination", this.props.destination)
  //   data.append("name", this.fileInput.files[0].name)
  //   //build data
  //   uploadFile(data)
  //     .then(response => this.props.onFileUpload(response))
  //     .catch(response => this.props.onError(response.message))
  //   this.props.onHideModal()
  // }

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
            <Button
              type="button"
              onClick={() => this.props.onFileUpload(this.state.file)}
            >
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
