import React from "react"

class PathElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { style: "" }
  }

  onMouseEnter() {
    if (this.props.isCurrent) this.setState({ style: "underline" })
  }

  onMouseLeave() {
    this.setState({ style: "none" })
  }

  render() {
    return (
      <span
        onClick={this.props.onClick}
        onMouseEnter={() => {
          this.onMouseEnter()
        }}
        style={{ textDecoration: this.state.style }}
        onMouseLeave={() => {
          this.onMouseLeave()
        }}
      >
        <img
          style={{ width: "0.2em", margin: "0.5em" }}
          src={process.env.PUBLIC_URL.concat("Icons/icon_arrow_right.png")}
          alt="icon right arrow"
        />
        <span>{this.props.name}</span>
      </span>
    )
  }
}

export default PathElement
