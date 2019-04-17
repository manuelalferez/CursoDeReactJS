import React, {Component} from 'react';

class BadgesList extends Component {
    render() {
        return (
                <ul className='list-unstyled'>
                    {this.props.data.map((badge)=>{
                        return (
                            <li key={badge.id}>
                                <p>{badge.firstName} {badge.lastName}</p>
                            </li>
                        )
                    })}
                </ul>
        );
    }
}

export default BadgesList;