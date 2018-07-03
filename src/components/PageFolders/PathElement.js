import React from "react"

const PathElement = ({ name, onClick = () => {} }) => {
  return (
    <span onClick={onClick}>
      <img
        style={{ width: "0.2em", margin: "0.4em" }}
        src={process.env.PUBLIC_URL.concat("Icons/icon_arrow_right.png")}
        alt="icon right arrow"
      />
      <span>{name}</span>
    </span>
  )
}

export default PathElement
