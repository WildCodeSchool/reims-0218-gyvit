import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarTop from "../components/NavbarTop"

import { storiesOf } from "@storybook/react"

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)
