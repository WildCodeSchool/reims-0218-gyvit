import React from "react"
import { convertDateFromJsonToFrench } from "../../functions/dirs"
import DropDownFileContainer from "../../containers/DropDownFileContainer"
import Share from "./Share"
import "./styles-page-folders/rowFile.css"

const RowFile = ({ file, key }) => {
  const { name, modified, shares } = file
  return (
    <tr key={key}>
      <td style={{ width: "40%" }}>
        <img
          className="imgRowFile"
          src={process.env.PUBLIC_URL + "Icons/icon_file_image.svg"}
          alt="file Icon"
        />
        {name}
      </td>
      <td className="align-middle tdRowFile">
        {convertDateFromJsonToFrench(modified)}
      </td>
      <td>
        {shares &&
          shares.map((share, index) => <Share key={index} {...share} />)}
      </td>
      <td className="tdShareRowFile">
        <DropDownFileContainer file={file} />
      </td>
    </tr>
  )
}
export default RowFile
