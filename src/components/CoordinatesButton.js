import React, { Component } from "react";

class CoordinatesButton extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={(event) => {
          this.props.onReceiveCoordinates([event.clientX, event.clientY]);
        }}
      >
        Click Me
      </button>
    );
  }
}

export default CoordinatesButton;
