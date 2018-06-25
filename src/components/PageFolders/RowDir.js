import React from "react"
import { DateTime } from "luxon"
import Share from "./Share"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const RowDir = ({ _id, name, shares, onDirclick, modified }) => (
  <tr key={_id}>
    <th>
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
        width: "170px",
        height: "14px",
        fontFamily: "DepotNew",
        fontSize: "14px",
        marginTop: "50px",
        marginBottom: "28px",
        textAlign: "center",
        color: "#a5a0c2"
      }}
    >
      {convertDateFromJsonToFrench(modified)}
    </td>
    <td>
      {shares &&
        shares.map((share, key) => <Share {...share} key={share.id} />)}
      {/* <Share /> */}
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
