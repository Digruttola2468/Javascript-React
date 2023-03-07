import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function add(x, y) {
    return x + y;
  }
  return <h1>{add(30, 13)}</h1>;
}

root.render(
<>
    {Greeting()}
    {Greeting()}
    {Greeting()}
</>);
