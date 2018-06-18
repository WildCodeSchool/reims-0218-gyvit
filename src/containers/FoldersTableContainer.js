import React, { Component } from "react"
import { connect } from "react-redux"
import FoldersTable from "../components/PageFolders/FoldersTable"
import {
  makeRetrieveDirSuccess,
  makeReplaceFolder
} from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => {
    dispatch(makeRetrieveDirSuccess(response))
    dispatch(makeReplaceFolder(response))
  }
})

class FoldersTableWrap extends Component {
  render() {
    console.log(this.props)
    return (
      <FoldersTable
        files={this.props.files}
        dirs={this.props.folders}
        onRetrieveDirSuccess={this.props.onRetrieveDirSuccess()}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(files => this.props.onRetrieveDirSuccess(files))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
