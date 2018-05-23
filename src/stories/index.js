import React from "react"

import { storiesOf } from "@storybook/react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Media, FormGroup, Input, Badge } from "reactstrap"

storiesOf("Page Dashboard", module)
  .add("Search", () => (
    <Container>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Search..."
        />
      </FormGroup>
    </Container>
  ))

  .add("Profil", () => (
    <Container>
      <Media>
        <Media rounded-circle href="#">
          <Media
            object
            src="http://via.placeholder.com/64x64"
            alt="Kevin Marlot"
          />
        </Media>
        <Media body>
          <Media heading>Kevin Marlot</Media>
          Meduza
        </Media>
      </Media>
    </Container>
  ))
  .add("Notification icon", () => (
    <Container>
      <img src={process.env.PUBLIC_URL + "img/iconNotif.ico"} alt="iconNotif" />
    </Container>
  ))
  .add("Notification badge", () => (
    <Badge color="danger" pill>
      4
    </Badge>
  ))
