import React from "react";
import { render } from "react-dom";
import Badge from "./components/Badge";
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// Selección del elemento del DOM dónde insertar
const container = document.getElementById("app");

render(<Badge />, container);
