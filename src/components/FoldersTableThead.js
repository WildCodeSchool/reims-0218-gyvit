//TODO: create filters component for the folders page

import React from "react"
import { thead, tr, th } from "reactstrap"

const FoldersTableThead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Last update</th>
      <th>Users</th>
      <th /> {/* it is the col for the burger menu*/}
    </tr>
  </thead>
)

export default FoldersTableThead
