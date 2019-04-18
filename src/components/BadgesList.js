import React, {Component} from 'react';
import './styles/BadgesList.css';

class BadgesListItem extends Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img
                    className="BadgesListItem__avatar"
                    src={this.props.badge.avatarUrl}
                    alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br/>@{this.props.badge.twitter}
                    <br/>
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

class BadgesList extends Component {
    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.data.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgesListItem badge={badge}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;