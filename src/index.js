import React from "react";
import ReactDOM from "react-dom/client";

//No es necesario agregar las extenciones .js
import { Greeting, UserCard } from './Greating';

import Algo,{ Agregar } from './Product';

const root = ReactDOM.createRoot(document.getElementById("root"));

//PascalCase
root.render(
<>
    {Greeting()}
    {UserCard()}
    {Algo()}
</>);
