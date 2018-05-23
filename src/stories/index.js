import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { NavItem, Nav, NavLink } from "reactstrap"
import { Button, Welcome } from "@storybook/react/demo"
import "bootstrap/dist/css/bootstrap.min.css"

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
