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
    <div>
      {/* <div>
        style={{
          width: "34px",

          height: "14px",

          fontFamily: "DepotNew",

          fontSize: "14px",

          fontWeight: "normal",

          fontStyle: "normal",

          fontStretch: "normal",

          lineHeight: "normal",

          letterSpacing: "normal",

          textAlign: "left",

          color: "#181048"
        }} */}
      {name}
      {/* </div> */}
      <img
        // style={{
        //   width: "10px",
        //   height: "8px",
        //   backgroundColor: "#a5a0c2"
        // }}
        src={source}
        alt={alter}
      />
    </div>
  )
}

FoldersTableCategory.propTypes = {
  name: PropTypes.string.isRequired,
  direction: PropTypes.string
}

export default FoldersTableCategory
