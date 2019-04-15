import React, {Component} from 'react';
import NavBar from '../NavBar'
import header from '../../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../Badge'
import avatarURL from '../../images/avatar.jpg'
import BadgeForm from '../../components/BadgeForm'

class BadgeNew extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTittle: '',
            twitter: ''
        }
    };

    handleChange = e => {
        // Primera forma de modificar el state
        // const copia = this.state.form;
        // copia[e.target.name] = e.target.value;
        // this.setState({
        //         form: copia
        //     }
        // )
        this.setState({
            form: {
                ...this.state.form, //Copiamos el objeto form
                [e.target.name]: e.target.value
            }
        })
    };

    render() {
        return (
            <div>
                <NavBar/>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='Hero'/>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <Badge firstName={this.state.form.firstName}
                               lastName={this.state.form.lastName}
                               jobInfo={this.state.form.jobTittle}
                               twitter={this.state.form.twitter}
                               avatar={avatarURL}/>
                    </div>
                    <div className='col-6'>
                        <BadgeForm onChange={this.handleChange}
                                   formValues={this.state.form}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
