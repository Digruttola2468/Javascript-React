import React from "react";
import ReactDOM from "react-dom/client";

//No es necesario agregar las extenciones .js
import { Greeting, UserCard } from "./Greating";

import Algo, { Agregar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

//PascalCase
root.render(
  <>
    <Greeting title="Hola" />
    <Greeting title={39} />
    <Greeting title={true} />
    <Greeting title={[2, 3, 4, 1]} />

    <UserCard
      name="Ivan DI Gruttola"
      amount={3000}
      married={false}
      points={[90, 33, 1.3]}
      address={{ street: "Bustamante 234", city: "Rosario" }}
    />

    <UserCard
      name="Brisa Gonzales"
      amount={1000}
      married={true}
      points={[2, 3, 1.3]}
      address={{ street: "Quintana 234", city: "San Lorenzo" }}
    />
  </>
);
