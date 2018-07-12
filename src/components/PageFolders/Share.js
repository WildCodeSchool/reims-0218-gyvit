import React from "react"

const Share = ({ account, key }) => {
  const pict = process.env.PUBLIC_URL + "Icons/person-icon.png"
  //account has no picture now.
  //With a pict inside, just delete those 2 lines and replace accountModified by account
  const accountModified = { ...account, pict: pict }
  return (
    <img
      src={accountModified.pict}
      alt={`icone Share n° ${key}`}
      style={{
        marginTop: "25px",
        width: "30px",
        height: "30px"
      }}
      className="rounded-circle"
      object
    />
  )
}

export default Share
