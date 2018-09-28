import React, { Component } from "react";
import { Button, Badge, Icon } from "antd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      positive: true
    };
  }

  handleClick = e => {
    e.target.id === "like"
      ? this.setState({ counter: this.state.counter + 1 })
      : this.setState({ counter: this.state.counter - 1 });

    this.state.counter >= 0
      ? this.setState({ positive: true })
      : this.setState({ positive: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Proves amb Events</h1>
        </header>

        <div className="App-content">
          <div className={this.state.positive ? "Counter" : "Counter-negative"}>
            {this.state.counter}
          </div>
          <br />
          <Button.Group size="large" onClick={this.handleClick}>
            <Button type="primary" id="diskike">
              <Icon type="dislike" />
              Dislike
            </Button>
            <Button type="primary" id="like">
              Like
              <Icon type="like" />
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default App;
