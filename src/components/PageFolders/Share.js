import React from "react"

const Share = ({ account, key }) => {
  const pict = process.env.PUBLIC_URL + "Icons/person-icon.png"
  const accountModified = { ...account, pict: pict }
  return (
    <img
      src={(account.pict)?account.pict:accountModified.pict}
      alt={`icone Share n° ${key}`}
      style={{
        marginTop: "25px",
        width: "30px",
        height: "30px"
      }}
      className="rounded-circle"
    />
  )
}

export default Share
