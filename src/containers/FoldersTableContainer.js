import React, { Component } from "react"
import { connect } from "react-redux"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import PageFolders from "../components/PageFolders/PageFolders"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response))
})

class FoldersTableWrap extends Component {
  render() {
    return <PageFolders files={this.props.files} dirs={this.props.folders} />
  }

  componentDidMount() {
    retrieveDir().then(files => this.props.onRetrieveDirSuccess(files))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersTableWrap)
