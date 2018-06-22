import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"

import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"
// import { makeAddAFileSuccess } from "../actions/filesActions"

const mapStateToProps = state => ({
  currentDir: state.currentDir
})

const mapDispatchToProps = dispatch => ({
  onFileUpload: response => dispatch(makeAddAFileSuccess(response))
})

class UploadFileFormContainer extends Component {
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
    console.log("name tapé" + event.target.value)
  }

  onUploadLocalFile() {
    uploadFile(this.state.name, this.state.destination, this.state.file).then(
      file => this.props.onFileUpload(file)
    )
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
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="button" onClick={this.onUploadLocalFile}>
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
