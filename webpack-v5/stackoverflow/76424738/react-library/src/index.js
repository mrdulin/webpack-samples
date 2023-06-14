import React, { useEffect } from "react";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function MyPromosComponent() {
  useEffect(() => window.scrollTo(0, 0));
  return <div>my component</div>;
}

export default MyPromosComponent;
