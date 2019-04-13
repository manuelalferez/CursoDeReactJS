import React, { Component } from "react";
import logoHeader from "../images/badge-header.svg";
import avatar from "../images/avatar.jpg";
import './styles/Badge.css'


class Badge extends Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={logoHeader}  alt='logo'/>
        </div>

        <div className="badge_section-name ">
          <img className="badge_avatar" alt='avatar' src={avatar} />
          <h1>
            Manuel <br /> Alférez
          </h1>
        </div>

        <div className="badge_section-info">
          <p>Develepoer and GDG organizer</p>
          <a href="https://www.manuelalferez.com" target="_blank">
            manuelalferez.com
          </a>
        </div>
        <div className="badge_footer">#devfest-2019</div>
      </div>
    );
  }
}

export default Badge;
