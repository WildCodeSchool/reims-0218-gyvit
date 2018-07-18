import React from "react"
import "./styles-page-folders/share.css"

const Share = ({ account, key }) => {
  const placeHolderPict = process.env.PUBLIC_URL + "Icons/person-icon.png"
  return (
    <img
      className="imgShare rounded-circle"
      src={(account.pict)?account.pict:placeHolderPict}
      alt={`icone Share n° ${key}`}
    />
  )
}

export default Share
