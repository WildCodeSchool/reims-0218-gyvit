//TODO: create a email input
import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

export default class ForgotPasswordEmail extends React.Component {
  render() {
    return (
      <FormGroup
        style={{
          marginBottom: "40px",
          marginTop: "60px"
        }}
      >
        >
        <Label for="email">Email </Label>
        <Input type="email" name="email" id="IdEmail" placeholder="Email" />
      </FormGroup>
    )
  }
}
