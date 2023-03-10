import React from "react";
import ReactDOM from "react-dom/client";

//No es necesario agregar las extenciones .js
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ivan",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "John",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Brisa",
    image: "https://robohash.org/user3",
  },
];

//PascalCase
root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })}
  </>
);
