import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>Sumar</button>

      <button onClick={() => {setCounter(counter - 1)}}>Restar</button>
    </div>
  );
}

//PascalCase
root.render(
  <>
    <Counter />
  </>
);
