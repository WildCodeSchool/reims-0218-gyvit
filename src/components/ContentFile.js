import React from "react"
import { Table } from "reactstrap"

const oneFile = () => (
  <div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Last Update</th>
          <th>Users</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-folder-128.png"
              alt="icone folder"
            />01 - Agence
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img
              src="https://image.flaticon.com/icons/png/128/149/149072.png"
              alt="icone folder"
            />
          </td>
          <td>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43C_H_X-OncoJFcKmDRXKv1jFWZjYq3GiI4VrN1aFtZjzOl5a"
              alt="icone poppup"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default oneFile
