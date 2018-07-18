import React from "react"
import Dropzone from "react-dropzone"
import { connect } from "react-redux"
import FoldersTableContainer from "../containers/FoldersTableContainer"
import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"
const mapStateToProps = state => {
  return {
    destination: state.currentDir._id
  }
}
const mapDispatchToProps = dispatch => ({
  // function to store the new dir
  onSubmitUploadFile: response => dispatch(makeAddAFileSuccess(response))
})

class DragNDropContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      accept: "",
      files: [],
      dropzoneActive: false
    }
  }

  onDragEnter() {
    this.setState({
      dropzoneActive: true
    })
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    })
  }

  onDrop(files) {
    uploadFile(this.props.destination).then(response =>
      this.props.onSubmitUploadFile(response)
    )
    this.setState({
      files,
      dropzoneActive: false
    })
  }

  applyMimeTypes(event) {
    this.setState({
      accept: event.target.value
    })
  }

  render() {
    const { accept, files, dropzoneActive } = this.state
    const overlayStyle = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: "2.5em 0",
      background: "rgba(0,0,0,0.5)",
      textAlign: "center",
      color: "#fff"
    }
    return (
      <Dropzone
        disableClick
        style={{ position: "relative" }}
        accept={accept}
        onDrop={this.onDrop.bind(this)}
        onDragEnter={this.onDragEnter.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
      >
        {dropzoneActive && <div style={overlayStyle}>Drop files...</div>}
        <div>
          <FoldersTableContainer />
          <ul>{files.map(f => <li>{f.name}</li>)}</ul>
        </div>
      </Dropzone>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragNDropContainer)
