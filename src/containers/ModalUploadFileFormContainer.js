import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap"

import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"
// import { makeAddAFileSuccess } from "../actions/filesActions"

const mapDispatchToProps = dispatch => ({
  onFileUpload: response => dispatch(makeAddAFileSuccess(response))
})

class ModalUploadFileFormContainer extends Component {
  //add constructor for two input "email" & "password"
  constructor() {
    super()
    this.state = {
      //value default of "email" & "password"
      name: "",
      destination: "",
      file: {}
    }
    this.onNameUploadFile = this.onNameUploadFile.bind(this)
    this.onUploadLocalFile = this.onUploadLocalFile.bind(this)
  }

  onNameUploadFile(event) {
    this.setState({ [event.target.name]: event.target.value }) //dynamique value email or password
    console.log(event.target.value)
  }

  onUploadLocalFile() {
    uploadFile(this.state.name, this.state.destination, this.state.file).then()
  }
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="nameFile" sm={2}>
            Nom du fichier
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              value={this.state.name}
              name="name"
              id="nameFile"
              onChange={this.onNameUploadFile}
              placeholder="Votre nom de fichier"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              type="button"
              onClick={this.onUploadLocalFile}
              encType="multipart/form-data"
            >
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ModalUploadFileFormContainer)
