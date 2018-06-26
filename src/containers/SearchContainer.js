import React, { Component } from "react"
import { connect } from "react-redux"
import { makeListAllDirs } from "../actions/foldersActions"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import { listAllDir } from "../api/directorys/listAllDirectorys"
import { makeShowModalError } from "../actions/errorsActions"

// PR 1
// resultSearch reducer handling listAllDirs action
// mapStateToProps connect options to resultSearch reducer

// PR 2
// on dir click retrieve dir

// PR3
// highlight letters

const mapDispatchToProps = dispatch => ({
  onFilesSearch: response => dispatch(makeListAllDirs(response)),
  onError: message => dispatch(makeShowModalError(message))
})

export class NavbarTopFilter extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.onSearchType = this.onSearchType.bind(this)
  }
  onSearchType(event) {
    this.setState({ value: event.target.value })
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
          value={this.state.search}
        />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(NavbarTopFilter)
