import React, { Component } from "react"
import { connect } from "react-redux"
import FoldersTable from "../components/PageFolders/FoldersTable"
import { makeFetchFoldersSuccess } from "../actions/foldersActions"
import { listAllFiles } from "../api/files/listAllFiles"

const mapStateToProps = state => ({
  files: state.files
})

const mapDispatchToProps = dispatch => ({
  onAllFilesReceived: response => dispatch(makeFetchFoldersSuccess(response))
})

class AllFilesReceived extends Component {
  render() {
    return <FoldersTable files={this.props.files} />
  }

  componentDidMount() {
    listAllFiles().then(files => this.props.onAllFilesReceived(files))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllFilesReceived)
