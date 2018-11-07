import React, { Component } from "react";
import { Button, Icon } from "antd";
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
      ? this.setState(state => ({ counter: state.counter + 1 }))
      : this.setState(state => ({ counter: state.counter - 1 }));

    this.setState(state => {
      return state.counter >= 0 ? { positive: true } : { positive: false };
    });
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
