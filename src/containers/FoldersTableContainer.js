import React, { Component } from "react"
import { connect } from "react-redux"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

import FoldersTable from "../components/PageFolders/FoldersTable"

const mapStateToProps = state => ({
  dirs: state.dirs,
  files: state.files,
  parent: state.parent
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
    retrieveDir(id).then(response => dispatch(makeRetrieveDirSuccess(response)))
})

class FoldersTableWrap extends Component {
  render() {
    const { parent, files, folders, onDirclick } = this.props
    return (
      <FoldersTable
        parent={parent}
        files={files}
        dirs={folders}
        onDirclick={onDirclick}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
