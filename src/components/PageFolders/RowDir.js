import React from "react"
import DropDownDirContainer from "../../containers/DropDownDirContainer"
import Share from "./Share"
import { convertDateFromJsonToFrench } from "../../functions/dirs"
import "./styles-page-folders/rowDir.css"

const RowDir = ({ dir, onDirclick }) => {
  const { _id, name, modified, shares } = dir
  return (
    <tr style={{ cursor: "pointer" }} key={_id}>
      <th onClick={() => onDirclick(_id)} style={{ width: "40%" }}>
        <img
          className="imgRowDir"
          src={process.env.PUBLIC_URL + "Icons/icon_folder.png"}
          alt="Directory Icon"
        />
        {name}
      </th>
      <td className="tdRowDir align-middle" onClick={() => onDirclick(_id)}>
        {convertDateFromJsonToFrench(modified)}
      </td>
      <td className="tdShareRowDir">
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
