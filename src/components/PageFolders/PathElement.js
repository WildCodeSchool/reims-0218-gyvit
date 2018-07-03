import React from "react"

class PathElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { style: "" }
  }

  onMouseEnter(underlined) {
    if (underlined) this.setState({ style: "underline" })
  }

  onMouseLeave(underlined) {
    this.setState({ style: "none" })
  }

  render() {
    return (
      <span
        onClick={this.props.onClick}
        onMouseEnter={() => {
          console.log("Enter, underlined: ", this.props.underlined)
          this.onMouseEnter(this.props.underlined)
        }}
        style={{ textDecoration: this.state.style }}
        onMouseLeave={() => {
          console.log("Leave, underlined: ", this.props.underlined)
          this.onMouseLeave(this.props.underlined)
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
