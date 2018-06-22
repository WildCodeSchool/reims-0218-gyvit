import React from "react"
import { DateTime } from "luxon"

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
        marginTop: "28px",
        marginBottom: "28px",
        textAlign: "center",
        color: "#a5a0c2"
      }}
    >
      {convertDateFromJsonToFrench(modified)}
    </td>
    <td>
      {shares &&
        shares.map((share, key) => <i src="" alt={`icone Share n° ${key}`} />)}
      <img
        style={{
          marginTop: "25px",
          width: "30px",
          height: "30px"
        }}
        className="rounded-circle"
        object
        src=""
        alt="avatar"
      />
    </td>
    <img
      style={{
        marginTop: "33px"
      }}
      src="Assets/icon_dots_more.png"
      alt=""
    />
  </tr>
)

export default RowDir
