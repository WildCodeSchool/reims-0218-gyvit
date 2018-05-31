import React from "react"
import { Table } from "reactstrap"
import ContentFile from "./ContentFile"
import Category from "./Category"

const ListFile = ({ files = [], dirs = [] }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>
            <Category name="Name" direction={null} />
          </th>
          <th>
            <Category name="Last update" direction={null} />
          </th>
          <th>
            <Category name="Users" direction={"asc"} />
          </th>
          <th />
        </tr>
      </thead>
      <ContentFile
        files={files}
        dirs={dirs}
        direction={null}
        category={"name"}
      />
    </Table>
  </div>
)

export default ListFile
