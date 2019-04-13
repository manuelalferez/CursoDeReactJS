/* const element = document.createElement('h1')
element.textContent= 'Hello World, Manuel!'

const container = document.getElementById('app')
container.append(element) */

import React from "react";
import { render } from "react-dom";

const element = <h1>Hola Mundo!</h1>;
const container = document.getElementById("app");
/* render(qué, dónde); */
render(element, container);
/* ReactDOM.render(element, container); */