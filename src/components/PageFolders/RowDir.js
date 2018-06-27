import React from "react"
import { DateTime } from "luxon"
import DropDown from "./DropDown"
import Share from "./Share"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const RowDir = ({ _id, name, shares, onDirclick, modified }) => (
  <tr key={_id}>
    <th style={{ width: "40%" }}>
      <img
        onClick={() => onDirclick(_id)}
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
      className="align-middle"
      style={{
        width: "45%",
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
    <td><DropDown /></td>
  </tr>
)

export default RowDir
