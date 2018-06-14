import React from "react"
import PropTypes from "prop-types"

const FoldersTableCategory = ({ name = "", direction = null }) => {
  let source, alter
  switch (direction) {
    case "asc":
      source = process.env.PUBLIC_URL.concat("Assets/icon_arrow_down.png")
      alter = "down"
      break
    case "desc":
      source = process.env.PUBLIC_URL.concat("Assets/icon_arrow_up.png")
      alter = "up"
      break
    default:
      source = process.env.PUBLIC_URL.concat("Assets/icon_double_arrow.png")
      alter = "upDown"
      break
  }
  return (
    <div
      style={{
        width: "60%",
        height: "10%",
        fontFamily: "DepotNew",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#181048"
      }}
    >
      {name}
      <img src={source} alt={alter} />
    </div>
  )
}

FoldersTableCategory.propTypes = {
  name: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default FoldersTableCategory
