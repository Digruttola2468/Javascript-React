import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Funciones que retornan una interfaz
function Greeting() {
    return <h1>Hola Ivan</h1>
}

//Existen dos maneras de llamar a la funcion Greeting()
//Siempre debe tener un elemento que contenga al resto
root.render(
    <div>
        {Greeting()}
        <Greeting></Greeting>

        {/* Self closing tags */}
        <Greeting />
    </div>
);
