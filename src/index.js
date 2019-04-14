import React from "react";
import {render} from "react-dom";
import './global.css'
import BadgeNew from './components/pages/BadgeNew'
import 'bootstrap/dist/css/bootstrap.css'

// Selección del elemento del DOM dónde insertar
const container = document.getElementById("app");

// render(<Badge firstName='Manuel'
//               lastName='Alférez'
//               jobInfo='Developer and GDG organizer'
//               webURL='https://www.manuelalferez.com'
//               web='manuelalferez.com'
//               avatar={avatarURL}/>, container);

render(<BadgeNew/>, container);