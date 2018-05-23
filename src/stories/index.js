import React from "react"
import { storiesOf } from "@storybook/react"

import "bootstrap/dist/css/bootstrap.min.css"

import Listlink from "../components/ListLink"
import NavbarTop from "../components/NavbarTop"

storiesOf("Page home", module).add("navbar", () => (
  <div>
    <Nav vertical>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
    </Nav>
    <hr />
  </div>
))

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)
storiesOf("Page Dashboard").add("Listlink", () => <Listlink />)
