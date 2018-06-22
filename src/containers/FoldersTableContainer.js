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
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onBackclick: idParent =>
    retrieveDir(idParent).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    )
})

class FoldersTableWrap extends Component {
  render() {
    return (
      <FoldersTable
        parent={this.props.parent}
        files={this.props.files}
        dirs={this.props.dirs}
        onDirclick={this.props.onDirclick}
        onBackclick={this.props.onBackclick}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
