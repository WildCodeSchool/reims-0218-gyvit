import React, { Component } from "react"
import { connect } from "react-redux"
import {
  makeRetrieveDirSuccess,
  makeSortDirsByNameAsc,
  makeSortDirsByDateAsc
} from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { Container } from "reactstrap"
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
    ),
  onSortNameAscClick: response => dispatch(makeSortDirsByNameAsc(response)),
  onSortDateAscClick: response => dispatch(makeSortDirsByDateAsc(response))
})

class FoldersTableWrap extends Component {
  render() {
    const {
      onSortNameAscClick,
      parent,
      files,
      dirs,
      onDirclick,
      onBackclick,
      onSortDateAscClick
    } = this.props
    return (
      <Container fluid>
        <FoldersTable
          parent={parent}
          files={files}
          dirs={dirs}
          onDirclick={onDirclick}
          onBackclick={onBackclick}
          onSortNameAscClick={onSortNameAscClick}
          onSortDateAscClick={onSortDateAscClick}
        />
      </Container>
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
