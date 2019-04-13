import React from "react";
import { render } from "react-dom";

// Creación del elemento a insertar en el DOM

// Dos formas de crear elementos en React
// JSX
const element = <h1>Hola Mundo!</h1>;

// React.createElement
const ele = React.createElement("h1", {}, "Hola MUNDO!");

// Otro ejemplo
// JSX
const element2 = (
  <div>
    <h1>Hola Mundo!</h1>
    <p>Hoy es Sábado</p>
  </div>
);
// React.createElement
const ele2 = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola desde Lopera!"),
  React.createElement("p", {}, "Hoy hace buen tiempo")
);

// Cómo insertamos variables
// JSX
const saludo = '¿Qué tal estás?'
const element3 = <h1>Hola, {saludo}</h1>

// React.createElement
const ele3 = React.createElement("h1", {}, `Hola, ${saludo} jeje`);

// Selección del elemento del DOM dónde insertar
const container = document.getElementById("app");

render(ele3 , container);
