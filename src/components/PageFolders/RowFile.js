import React from "react"
import { convertDateFromJsonToFrench } from "../../functions/dirs"
import DropDownFileContainer from "../../containers/DropDownFileContainer"
import Share from "./Share"

const RowFile = ({ file, key }) => {
  const { name, modified, shares } = file
  const pict = [] // i'm filling a pict's array with a placeHolder picture
  shares && pict.fill("Icons/person-icon.png", 0, shares.length - 1)
  return (
    <tr key={key}>
      <td style={{ width: "40%" }}>
        <img
          style={{
            width: "30px",
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
      <td>
        {shares && shares.map((share, key) => <Share key={key} {...share} />)}
      </td>
      <td
        style={{
          width: "20%"
        }}
      >
        <DropDownFileContainer file={file} />
      </td>
    </tr>
  )
}
export default RowFile
