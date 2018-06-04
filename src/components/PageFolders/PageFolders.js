import React from "react"

import NavbarTop from "./components/NavbarTop/NavbarTop"
import NavbarLeft from "./NavbarLeft"
import FolderBarTop from "./FoldersTable"

const PageFolders = ({ files = [], dirs = [] }) => (
  <div>
    <NavbarTop />
    <NavbarLeft />
    <FolderBarTop />
  </div>
)

export default PageFolders
