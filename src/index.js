import React from "react";
import {render} from "react-dom";
import './global.css'
import Badges from './components/pages/Badges'
import 'bootstrap/dist/css/bootstrap.css'

// Selección del elemento del DOM dónde insertar
const container = document.getElementById("app");

render(<Badges/>, container);