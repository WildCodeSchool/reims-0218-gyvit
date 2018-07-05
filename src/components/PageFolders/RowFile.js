import React from "react"
import { convertDateFromJsonToFrench } from "../../functions/dirs"
import DropDownFileContainer from "../../containers/DropDownFileContainer"


const RowFile = ({ file, key }) => {
  const { _id, name, modified, shares } = file
  return (
    <tr key={key}>
      <td>
        <img
          style={{
            width: "26.2px",
            height: "32px",
            marginTop: "20px",
            marginBottom: "20px",
            marginRight: "19.1px"
          }}
          src={process.env.PUBLIC_URL + "Icons/icon_file_image.svg"}
          alt="file Icon"
        />
        {name}
      </td>
      <td
        className="align-middle"
        style={{
          width: "60%",
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
      <td>
        {shares &&
          shares.map((share, key) => (
            <img src="" alt={`icone Share n° ${key}`} />
          ))}
      </td>
      <td>
        <DropDownFileContainer file={file} />
      </td>
    </tr>
  )
}
export default RowFile
