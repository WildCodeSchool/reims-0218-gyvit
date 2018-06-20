import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

export default class GetStartedSignInEmail extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: "40px",
          marginTop: "60px"
        }}
      >
        <FormGroup>
          <Label
            style={{
              marginTop: "30px",
              width: "33px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              textAlign: "left",
              color: "#9da5c9"
            }}
            for="email"
          >
            Email{" "}
          </Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label
            style={{
              marginTop: "30px",
              width: "33px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              textAlign: "left",
              color: "#9da5c9"
            }}
            for="email"
          >
            Name{" "}
          </Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label
            style={{
              marginTop: "30px",
              width: "75px",
              height: "12px",
              fontSize: "12px",
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              textAlign: "left",
              color: "#9da5c9"
            }}
            for="password"
          >
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </FormGroup>
      </div>
    )
  }
}
