import React, { Component } from "react";

import Display from "./Display";
import Controls from "./Controls";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleClick = e => {
    e.target.id === "like"
      ? this.setState(state => ({ value: state.value + 1 }))
      : this.setState(state => ({ value: state.value - 1 }));
  };

  render() {
    return (
      <div>
        <Display value={this.state.value} />
        <Controls handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Counter;
