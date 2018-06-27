import React, { Component } from "react"
import { connect } from "react-redux"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import { listAllDir } from "../api/directorys/listAllDirectorys"
import { makeShowModalError } from "../actions/errorsActions"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
// PR 1
// resultSearch reducer handling listAllDirs action
// mapStateToProps connect options to resultSearch reducer

const mapStateToProps = state => ({
  dirs: state.resultSearch
})

// PR 2
// on dir click retrieve dir

// PR3
// highlight letters

const mapDispatchToProps = dispatch => ({
  onFilesSearch: response => dispatch(makeListAllDirs(response)),
  onError: message => dispatch(makeShowModalError(message)),
  onDirclick: id =>
    retrieveDir(id).then(response => dispatch(makeRetrieveDirSuccess(response)))
})

export class NavbarTopFilter extends Component {
  constructor(props) {
    super(props)
    this.state = { search: "" }
    this.onSearchType = this.onSearchType.bind(this)
  }
  onSearchType(event) {
    this.setState({ search: event.target.value })
    const value = event.target.value
    listAllDir(value)
      .then(response => this.props.onFilesSearch(response))
      .catch(response => this.props.onError(response.message))
  }

  render() {
    return (
      <div>
        <NavbarTopSearch
          onSearchType={this.onSearchType}
          search={this.state.search}
          dirs={this.props.dirs}
          onDirclick={this.props.onDirclick}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopFilter)
