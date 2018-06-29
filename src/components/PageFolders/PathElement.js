import React from "react"

const PathElement = ({ name }) => {
  return (
    <a>
      <img
        style={{ width: "0.2em", margin: "0.4em" }}
        src={process.env.PUBLIC_URL.concat("Icons/icon_arrow_right.png")}
        alt="icon right arrow"
      />
      {`  ${name} `}
    </a>
  )
}

export default PathElement
