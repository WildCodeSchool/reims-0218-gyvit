import React, { Component } from "react"
import { connect } from "react-redux"
import {
  makeRetrieveDirSuccess,
  makeSortDirsByDateSuccess,
  makeSortDirsByNameSuccess
} from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { Container } from "reactstrap"
import FoldersTable from "../components/PageFolders/FoldersTable"

const mapStateToProps = state => ({
  dirs: state.dirs,
  files: state.files,
  parent: state.parent,
  directionName: state.directionName,
  directionDate: state.directionDate
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
    )
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
            console.log("SortDate")
            this.props.onSortDate(this.props.directionDate)
          }}
          onSortName={() => {
            console.log("SortName")
            this.props.onSortName(this.props.directionName)
          }}
          onSortShare={() => {
            console.log("SortShare")
          }}
          directionDate={this.props.directionDate}
          directionName={this.props.directionName}
          directionShare={""}
        />
      </Container>
    )
  }

  componentDidMount() {
    retrieveDir().then(root => this.props.onRetrieveDirSuccess(root))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoldersTableWrap)
