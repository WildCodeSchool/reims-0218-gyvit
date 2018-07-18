import React from "react"
<<<<<<< HEAD
import { DateTime } from "luxon"
import DropDown from "./DropDown"
=======
import { convertDateFromJsonToFrench } from "../../functions/dirs"
import DropDownFileContainer from "../../containers/DropDownFileContainer"
>>>>>>> 6d5871861eebe0c236338d1c2f8f41ecd484e142
import Share from "./Share"

const RowFile = ({ file, key }) => {
  const { name, modified, shares } = file
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
<<<<<<< HEAD
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
        shares.map((share, key) => <Share {...share} key={share._id} />)}
    </td>

    <td>
      <DropDown fileId={_id} dirName={name} />
    </td>
  </tr>
)

=======
      >
        {convertDateFromJsonToFrench(modified)}
      </td>
      <td>
        {shares &&
          shares.map((share, index) => <Share key={index} {...share} />)}
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
>>>>>>> 6d5871861eebe0c236338d1c2f8f41ecd484e142
export default RowFile
