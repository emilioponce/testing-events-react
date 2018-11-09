import React from "react";
import Counter from "./Counter";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Testing events</h1>
      </header>
      <div className="App-content">
        <Counter />
      </div>
    </div>
  );
};

export default App;
