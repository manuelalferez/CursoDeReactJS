import React from "react";
import {render} from "react-dom";
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from "./components/App";

// Selección del elemento del DOM dónde insertar
const container = document.getElementById("app");

render(<App/>, container);