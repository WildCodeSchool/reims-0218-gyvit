import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

export default class GetStartedSignInEmail extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Label
            style={{
              "margin-top": "30px",
              width: "33px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              "letter-spacing": "normal",
              "text-align": "left",
              color: "#9da5c9"
            }}
            for="email"
          >
            Email{" "}
          </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label
            style={{
              "margin-top": "30px",
              width: "33px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              "letter-spacing": "normal",
              "text-align": "left",
              color: "#9da5c9"
            }}
            for="email"
          >
            Name{" "}
          </Label>
          <Input type="email" name="name" id="IdEmail" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label
            style={{
              "margin-top": "30px",
              width: "75px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              "letter-spacing": "normal",
              "text-align": "left",
              color: "#9da5c9"
            }}
            for="password"
          >
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="IdPassword"
            placeholder="Password"
          />
        </FormGroup>
      </div>
    )
  }
}
