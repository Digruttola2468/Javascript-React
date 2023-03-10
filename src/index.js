import React from "react";
import ReactDOM from "react-dom/client";

//No es necesario agregar las extenciones .js
import {Posts} from './Posts';

const root = ReactDOM.createRoot(document.getElementById("root"));

//PascalCase
root.render(
  <>
    <Posts/>
  </>
);
