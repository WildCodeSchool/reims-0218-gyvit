import React, { Component } from "react"
import { connect } from "react-redux"
import FoldersTable from "../components/PageFolders/FoldersTable"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapStateToProps = state => ({
  folders: state.folders,
  files: state.files,
  parent: state.parent
})

const mapDispatchToProps = dispatch => ({
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
<<<<<<< HEAD
    retrieveDir(id).then(response => dispatch(makeRetrieveDirSuccess(response)))
=======
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onBackclick: response => dispatch(makeRetrieveDirSuccess(response.parent))
>>>>>>> 927747eb9c464411f80638a1d5de102f1951eb2e
})

class FoldersTableWrap extends Component {
  render() {
    const { parent, files, folders, onDirclick, onBackclick } = this.props
    return (
      <FoldersTable
        parent={parent}
        files={files}
        dirs={folders}
        onDirclick={onDirclick}
        onBackclick={onBackclick}
      />
    )
  }

  componentDidMount() {
    retrieveDir().then(dirs => this.props.onRetrieveDirSuccess(dirs))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
