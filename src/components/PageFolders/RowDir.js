import React from "react"
import DropDownDirContainer from "../../containers/DropDownDirContainer"
import Share from "./Share"
import { convertDateFromJsonToFrench } from "../../functions/dirs"

const RowDir = ({ dir, onDirclick }) => {
  const { _id, name, modified, shares } = dir
  return (
    <tr style={{ cursor: "pointer" }} key={_id}>
      <th onClick={() => onDirclick(_id)} style={{ width: "40%" }}>
        <img
          style={{
            width: "30px",
            height: "29px",
            marginTop: "20px",
            marginBottom: "20px",
            marginRight: "19.1px"
          }}
          src={process.env.PUBLIC_URL + "Icons/icon_folder.png"}
          alt="Directory Icon"
        />
        {name}
      </th>
      <td
        onClick={() => onDirclick(_id)}
        className="align-middle"
        style={{
          width: "40%",
          height: "9%",
          fontFamily: "DepotNew",
          fontSize: "14px",
          marginTop: "14%",
          fontWeight: "normal",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#a5a0c2"
        }}
      >
        {convertDateFromJsonToFrench(modified)}
      </td>
      <td
        style={{
          width: "20%"
        }}
      >
        {shares &&
          shares.map((share, key) => {
            return <Share {...share} key={key} />
          })}
      </td>
      <td>
        <DropDownDirContainer dir={dir} />
      </td>
    </tr>
  )
}

export default RowDir
