import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

export default class App extends Component {
  render() {
    return <div className="AppWrapper">app</div>;
  }
}

render(<App />, document.getElementById("app"));
