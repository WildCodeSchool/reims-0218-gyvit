import React from "react"
import { DateTime } from "luxon"

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
        color: "#a5a0c2",
        verticalAlign: "middle"
      }}
    >
      {convertDateFromJsonToFrench(modified)}
    </td>
    <td
      style={{
        verticalAlign: "middle"
      }}
    >
      {shares &&
        shares.map((share, key) => <i src="" alt={`icone Share n° ${key}`} />)}
      <img
        style={{
          width: "30px",
          height: "30px"
        }}
        className="rounded-circle"
        object
        src="img/kevinMarlot.jpeg"
        alt="avatar"
      />
    </td>
    <img
      style={{
        marginTop: "33px"
      }}
      src="Assets/icon_dots_more.png"
      alt="Button Dropdown"
    />
  </tr>
)

export default RowDir
