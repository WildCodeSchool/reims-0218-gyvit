import React, { Component } from "react"
import { connect } from "react-redux"
import {
  makeRetrieveDirSuccess,
  makeSortDirsByDateSuccess,
  makeSortDirsByNameSuccess
} from "../actions/foldersActions"
import { connectUserSuccessAction } from "../actions/userAction"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { retrieveRoot } from "../api/directorys/retrieveRoot"
import { retrieveMe } from "../api/users/retrieveMe"
import { Container } from "reactstrap"
import FoldersTable from "../components/PageFolders/FoldersTable"

const mapStateToProps = state => ({
  dirs: state.dirs,
  files: state.files,
  parent: state.parent,
  directionName: state.sortDirections.directionName,
  directionDate: state.sortDirections.directionDate
})

const mapDispatchToProps = dispatch => ({
  onSortDate: direction => dispatch(makeSortDirsByDateSuccess(direction)),
  onSortName: direction => dispatch(makeSortDirsByNameSuccess(direction)),
  onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response)),
  onDirclick: id =>
    retrieveDir(id).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onBackclick: idParent =>
    retrieveDir(idParent).then(response =>
      dispatch(makeRetrieveDirSuccess(response))
    ),
  onRetrieveMe: response => dispatch(connectUserSuccessAction(response))
})

class FoldersTableWrap extends Component {
  constructor() {
    super()
    this.state = {
      directionName: "",
      directionDate: ""
    }
  }
  render() {
    const { parent, files, dirs, onDirclick, onBackclick } = this.props
    return (
      <Container fluid>
        <FoldersTable
          parent={parent}
          files={files}
          dirs={dirs}
          onDirclick={onDirclick}
          onBackclick={onBackclick}
          onSortDate={() => {
            this.props.onSortDate(this.props.directionDate)
          }}
          onSortName={() => {
            this.props.onSortName(this.props.directionName)
          }}
          onSortShare={() => {}}
          directionDate={this.props.directionDate}
          directionName={this.props.directionName}
          directionShare={""}
        />
      </Container>
    )
  }

  componentDidMount() {
    retrieveRoot().then(root => this.props.onRetrieveDirSuccess(root))
    retrieveMe().then(response => this.props.onRetrieveMe(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
