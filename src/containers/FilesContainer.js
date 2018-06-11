import React, { Component } from "react"
import { connect } from "react-redux"
import FoldersTable from "../components/PageFolders/FoldersTable"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files
})

const mapDispatchToProps = dispatch => ({
  onAllFilesReceived: response => dispatch(makeRetrieveDirSuccess(response))
})

class AllFilesReceived extends Component {
  render() {
    return <FoldersTable files={this.props.files} dirs={this.props.folders} />
  }

  componentDidMount() {
    retrieveDir().then(files => this.props.onAllFilesReceived(files))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllFilesReceived)
