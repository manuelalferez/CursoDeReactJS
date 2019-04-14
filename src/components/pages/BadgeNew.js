import React, {Component} from 'react';
import NavBar from '../NavBar'
import header from '../../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../Badge'
import avatarURL from '../../images/avatar.jpg'

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='Hero'/>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Badge firstName='Manuel'
                               lastName='Alférez'
                               jobInfo='Developer and GDG organizer'
                               webURL='https://www.manuelalferez.com'
                               web='manuelalferez.com'
                               avatar={avatarURL}/>
                    </div>
                    /*<div className='col'></div>*/
                </div>
            </div>
        );
    }
}

export default BadgeNew;
