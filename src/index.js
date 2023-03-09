import React from "react";
import ReactDOM from "react-dom/client";

//No es necesario agregar las extenciones .js
import { Greeting, UserCard } from "./Greating";
import { Button } from './Button';
import Algo, { Agregar } from "./Product";
import {TaskCard} from './Task';

const root = ReactDOM.createRoot(document.getElementById("root"));

//PascalCase
root.render(
  <>
    <TaskCard ready={false}/>
  </>
);
