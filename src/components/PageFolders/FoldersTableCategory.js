import React from "react"
import PropTypes from "prop-types"

const FoldersTableCategory = ({ name = "", direction = "" }) => {
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
    <div>
      <span>{name + "    "}</span>
      <img src={source} alt={alter} />
    </div>
  )
}

FoldersTableCategory.propTypes = {
  name: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default FoldersTableCategory
