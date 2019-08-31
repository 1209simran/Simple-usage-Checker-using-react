import React, { Component } from "react";
import "./App.css";
import Temperature from "./components/temperature";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Usage checker</h1>
        </header>
        <div>
          <Temperature />
        </div>
      </div>
    );
  }
}

export default App;
