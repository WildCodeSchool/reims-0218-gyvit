import React from "react"

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
      {name}
      <img src={source} alt={alter} />
    </div>
  )
}

export default FoldersTableCategory
