import React, { Component } from "react";
import logoHeader from "../images/badge-header.svg";
import './styles/Badge.css'


class Badge extends Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={logoHeader}  alt='logo'/>
        </div>

        <div className="badge_section-name ">
          <img className="badge_avatar" alt='avatar' src={this.props.avatar} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="badge_section-info">
          <p>{this.props.jobInfo}</p>
          <a href={this.props.twitter}>
            @{this.props.twitter}
          </a>
        </div>
        <div className="badge_footer">#devfest-2019</div>
      </div>
    );
  }
}

export default Badge;
