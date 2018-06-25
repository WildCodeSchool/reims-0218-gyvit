import React from "react"

const share = ({ shares }) => (
  <td>
    {shares &&
      shares.map((share, key) => <i src="" alt={`icone Share n° ${key}`} />)}
    <img
      style={{
        marginTop: "25px",
        width: "30px",
        height: "30px"
      }}
      className="rounded-circle"
      object
      src=""
      alt="avatar"
    />
  </td>
)

export default share
