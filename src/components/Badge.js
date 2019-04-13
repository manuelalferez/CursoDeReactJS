import React, { Component } from "react";
import logoHeader from "../images/badge-header.svg";
import avatar from "../images/avatar.png";

class Badge extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={logoHeader} />
        </div>

        <div className="content">
          <img src={avatar} />
          <h1>
            Manuel <br /> Alférez
          </h1>
        </div>

        <div className="description">
          <p>Develepoer and GDG organizer</p>
          <a href="https://www.manuelalferez.com" target="_blank">
            manuelalferez.com
          </a>
        </div>

        <div>#devfest-2019</div>
      </div>
    );
  }
}

export default Badge;
