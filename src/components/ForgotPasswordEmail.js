//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

export default class ForgotPasswordEmail extends React.Component {
  render() {
    return (
      <Form
        style={{
          "margin-bottom": "40px",
          "margin-top": "60px"
        }}
      >
        <FormGroup>
          <Label for="email">Email </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
      </Form>
    )
  }
}
