import React from "react"

const Share = ({ account, key }) => {
  return (
    <img
      src={account.pict}
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
