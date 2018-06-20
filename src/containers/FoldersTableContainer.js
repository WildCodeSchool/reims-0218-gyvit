import React, { Component } from "react"
import { connect } from "react-redux"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

import FoldersTable from "../components/PageFolders/FoldersTable"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files,
  parent: state.parent
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onBackclick: parent =>
    retrieveDir(parent).then(response =>
      dispatch(makeRetrieveDirSuccess(response.parent._id))
    )
})

class FoldersTableWrap extends Component {
  render() {
    return (
      <FoldersTable
        files={this.props.files}
        dirs={this.props.folders}
        onDirclick={this.props.onDirclick}
        onBackclick={this.props.onBackclick}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(dirs => this.props.onRetrieveDirSuccess(dirs))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersTableWrap)
