/*
Es importante Que empieze con mayuscula
De esta forma diferenciamos de las funciones jsx con HTML , y tampoco REACT no lo conoce como un componente si no va con la primer letra en mayuscula
*/
export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p> ${props.amount} </p>
      <p> Estado Civil: {props.married ? "Casado" : "Soltero"} </p>
      <p> Ubicacion: {props.address.street} </p>
      <p> Ciudad: {props.address.city} </p>
    </div>
  );
}
