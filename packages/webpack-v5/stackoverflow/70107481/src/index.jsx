import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <img src={require("@/assets/images/logo.png")} alt="logo" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
