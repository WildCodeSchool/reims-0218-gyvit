import React, { Component } from "react"
import { connect } from "react-redux"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import { listAllDir } from "../api/directorys/listAllDirectorys"
import { makeShowModalError } from "../actions/errorsActions"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"
import { makeListAllDirs } from "../actions/foldersActions"

const mapStateToProps = state => ({
  results: state.resultSearch
})

const mapDispatchToProps = dispatch => ({
  onFilesSearch: response => dispatch(makeListAllDirs(response)),
  onError: message => dispatch(makeShowModalError(message)),
  onDirclick: id =>
    retrieveDir(id)
      .then(response => dispatch(makeRetrieveDirSuccess(response)))
      .then(() => this.setState({ search: "" }))
      .catch(response => dispatch(makeShowModalError(response)))
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
      .catch(response => this.props.onError(response))
  }

  render() {
    return (
      <div>
        <NavbarTopSearch
          onSearchType={this.onSearchType}
          search={this.state.search}
          results={this.props.results}
          onDirclick={this.props.onDirclick}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopFilter)
