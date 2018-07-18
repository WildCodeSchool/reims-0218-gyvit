import React from "react"
import "./styles-page-folders/share.css"

const Share = ({ account, key }) => {
  const pict = process.env.PUBLIC_URL + "Icons/person-icon.png"
  //account has no picture now.
  //With a pict inside, just delete those 2 lines and replace accountModified by account
  const accountModified = { ...account, pict: pict }
  return (
    <img
      className="imgShare rounded-circle"
      src={accountModified.pict}
      alt={`icone Share n° ${key}`}
    />
  )
}

export default Share
