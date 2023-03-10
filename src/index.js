import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  const [contador, setContador] = useState(0);

  //Si algo cambia en contador se ejecuta la funcion
  useEffect(() => {
    console.log("Render");
  }, [ contador ]);
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>

      <hr />

      <h1>Counter: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

//PascalCase
root.render(
  <>
    <Counter />
  </>
);
