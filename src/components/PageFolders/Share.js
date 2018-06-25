import React from "react"

const share = ({ _id, account }) => (
  <img
    src={account.pic}
    alt={`icone Share n° ${_id}`}
    style={{
      marginTop: "25px",
      width: "30px",
      height: "30px"
    }}
    className="rounded-circle"
    object
  />
)

export default share
