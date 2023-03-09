# Getting Started with Create React App

1. Download [Node JS](https://nodejs.org/en/)
2. Abrir Consola (Window)
3. Nos movemos a la carpeta desktop `cd desktop`
4. Verificamos si node JS esta instalado `node --version`
5. Con el siguiente comando `npx create-react-app nombre-proyecto` creamos un proyecto React

## Hello World React

```JS
import React from 'react';
import ReactDOM from 'react-dom/client';

//root es el elemento raiz de React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello World</h1>);
```

<hr>

## Componentes en React

Los componentes son partes de la interfaz y son reutilizables. Necesitamos de un componente inicial para agregar todos los elementos necesarios.

```JS
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Funciones que retornan una interfaz
function Greeting() {
    return <h1>Hola Ivan</h1>
}

//Existen dos maneras de llamar a la funcion Greeting()
//Siempre debe tener un elemento que contenga al resto si sacamos el div da un error
root.render(
    <div>
        {Greeting()}
        <Greeting></Greeting>

        {/* Self closing tags */}
        <Greeting />
    </div>
);

```

## JSX

**Es la combinacion de Javascript y HTML** donde nos permite que dentro del archivo javascript agregar etiquetas de HTML. Es basicamente lo que veniamos haciendo anteriormente. Donde verificamos que el **codigo en javascript no es 100% puro en su lenguaje al importar React**.

```JS
const name = "Ivan DI Gruttola";
  const segundoNombre = true;

  /* 
    if(segundoNombre)
        return <h1>Hola { name } , posee segundo nombre</h1>
    else 
        return <h1>Hola { name } , NO posee segundo nombre</h1>
    */

  //Ternary Operator
  return (
    <h1>
      {" "}
      {segundoNombre
        ? "Tengo Segundo Nombre 😀"
        : "No tengo Segundo nombre"}{" "}
    </h1>
  );
```

```JS
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  function add(x, y) {
    return x + y;
  }
  return <h1>{add(30, 13)}</h1>;
}

root.render(Greeting());
```

En JSX nos da la posibilidad de usar Fragment <></> para poder agregar un contenedor vacio

```JS
root.render(
<>
    Greeting()
    Greeting()
    Greeting()
</>);
```

## ECmaScript - Javascript Modules

Existen diferentes maneras de importar y exportar modulos

En el archivo `Product.js` vemos el siguiente codigo 

```JS
function Product() {
    return <div>
        <h1>Producto de la clase Product</h1>
    </div>
}

export function Agregar () {

}

//Exporta por defecto la siguente funcion
export default Product
```

Donde por Defecto al momento de importar la clase en el `index.js` vemos que se hace de la siguiente manera

```JS
//Podemos agregarle otro nombre ya que es como una variable
import Algo from './Product';

//Tenemos tmb esta forma de llamarar a la funcion Agregar() que esta exportando de Product.js
//import Algo,{ Agregar } from './Product';
```

## React Props

Nos ayuda a cambiar datos internamente de un componente

En JSX podemos enviar a la funcion UserCard un objeto con los atributos que posee el elemento HTML

```JSX
  <UserCard
    name="Ivan DI Gruttola"
    amount={3000}
    married={false}
    points={[90, 33, 1.3]}
    address={{ street: "Bustamante 234", city: "Rosario" }}
  />
```

```JS
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
```

## PropTypes y defaultProps

Instalamos la libreria , abrimos Consola del sistema y nos movemos a la carpeta del proyecto y colocar el siguiente comando

`npm install --save prop-types`

Esta libreria nos ayudara que al momento de enviar paramentros sea solamente de un tipo de dato.

```JS
import PropTypes from 'prop-types'; // ES6

export function Button( {text, name="Usuario"} ) {
    return <button>
        {text} - {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}
```

## Estilos

Nosotros podemos colocar estilos en un archivo CSS o en el mismo JSX

### Estilos JSX

```JS
export function TaskCard() {

  const cardStyles = {
    backgroundColor: "#3de",
    color: "#fff",
    padding: "20px",
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
        Mi Primera Tarea
      </h1>
      <h2 style={cardStyles}>Mi Segunda Tarea</h2>

      <p>Tarea Realizada</p>
    </div>
  );
}
```

### Estilos CSS

```JS
//Import File CSS
import "./task.css";

export function TaskCard( {ready} ) {

  const cardStyles = {
    backgroundColor: "#3de",
    color: "#fff",
    padding: "20px",
  };

  return (
    <div className="card">
      <h1 style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
        Mi Primera Tarea
      </h1>
      <h2 style={cardStyles}>Mi Segunda Tarea</h2>

      <p className={ready ? "green" : "red"}>{ready ? "Tarea Terminada" : "Tarea Pendiente"}</p>
    </div>
  );
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
