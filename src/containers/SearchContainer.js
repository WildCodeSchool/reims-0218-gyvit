import React, { Component } from "react"
import { connect } from "react-redux"
import { makeListAllDirs } from "../actions/foldersActions"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import { listAllDir } from "../api/directorys/listAllDirectorys"

// dispatch action to
const mapDispatchToProps = dispatch => ({
  onFilesSearch: response => dispatch(makeListAllDirs(response))
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
    listAllDir(value).then(response => this.props.onFilesSearch(response))
  }

  render() {
    console.log(this.state.value)
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
