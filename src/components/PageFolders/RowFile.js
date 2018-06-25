import React from "react"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const RowFile = ({ _id, name, modified, shares }) => (
  <tr key={_id}>
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
      style={{
        width: "104px",
        height: "14px",
        fontFamily: "DepotNew",
        fontSize: "14px",
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
  </tr>
)

export default RowFile
