/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react"
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap"

export default class FoldersPopover extends React.Component {
  constructor(props) {
    super(props)

    this.togglePop = this.togglePop.bind(this)
    this.state = {
      popoverOpen: false
    }
  }

  togglePop() {
    setInterval(() => {
      this.setState({ popoverOpen: !this.state.popoverOpen })
    }, 2000)
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.togglePop}>
          Launch Popover
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}
